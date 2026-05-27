import CryptoJS from "crypto-js";

export function buildSparkAuthUrl(
  host: string,
  path: string,
  apiKey: string,
  apiSecret: string,
) {
  const date = new Date().toUTCString();
  const signatureOrigin = `host: ${host}\ndate: ${date}\nGET ${path} HTTP/1.1`;
  
  // ✅ 修改1：使用 crypto-js 代替 Node.js 的 crypto
  const signature = CryptoJS.HmacSHA256(signatureOrigin, apiSecret).toString(CryptoJS.enc.Base64);

  const authorizationOrigin = `api_key="${apiKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
  
  // ✅ 修改2：使用全平台通用的 btoa 代替 Node.js 的 Buffer
  const authorization = btoa(authorizationOrigin);

  const params = new URLSearchParams({
    authorization,
    date,
    host,
  });

  return `wss://${host}${path}?${params.toString()}`;
}

type SparkMessage = { role: "user" | "assistant"; content: string };

type SparkConfig = {
  host: string;
  assistantId: string;
  appId: string;
  apiKey: string;
  apiSecret: string;
  domain?: string;
  uid?: string;
};

export async function sparkAssistantChat(
  messages: SparkMessage[],
  config: SparkConfig,
): Promise<string> {
  const path = `/v1/assistants/${config.assistantId}`;
  const url = buildSparkAuthUrl(
    config.host,
    path,
    config.apiKey,
    config.apiSecret,
  );

  return new Promise((resolve, reject) => {
    let ws: WebSocket | null = null;
    let fullText = "";
    let finished = false;

    const cleanup = () => {
      if (ws) {
        ws.onopen = null;
        ws.onmessage = null;
        ws.onerror = null;
        ws.onclose = null;
        try {
          if (ws.readyState === WebSocket.OPEN) {
            ws.close();
          }
        } catch {
          // ignore
        }
        ws = null;
      }
    };

    const finish = (err?: Error) => {
      if (finished) return;
      finished = true;
      cleanup();
      if (err) reject(err);
      else resolve(fullText.trim());
    };

    const timer = setTimeout(() => {
      finish(new Error("讯飞接口响应超时"));
    }, 55000);

    try {
      // 原生自带的 WebSocket，在 Edge 环境和浏览器中直接可用，无需任何三方 ws 库
      ws = new WebSocket(url);

      ws.onopen = () => {
        if (!ws) return;
        ws.send(
          JSON.stringify({
            header: {
              app_id: config.appId,
              uid: config.uid ?? "zeng-daowei-portfolio",
            },
            parameter: {
              chat: {
                domain: config.domain ?? "generalv3",
                temperature: 0.5,
                top_k: 4,
                max_tokens: 2048,
              },
            },
            payload: {
              message: {
                text: messages.map((m) => ({
                  role: m.role,
                  content: m.content,
                })),
              },
            },
          }),
        );
      };

      ws.onmessage = (event) => {
        try {
          const json = JSON.parse(event.data) as {
            header?: { code?: number; message?: string; status?: number };
            payload?: {
              choices?: { text?: { content?: string }[] };
            };
          };

          const code = json.header?.code ?? -1;
          if (code !== 0) {
            clearTimeout(timer);
            finish(new Error(json.header?.message ?? `讯飞错误码 ${code}`));
            return;
          }

          for (const part of json.payload?.choices?.text ?? []) {
            if (part.content) fullText += part.content;
          }

          if (json.header?.status === 2) {
            clearTimeout(timer);
            finish();
          }
        } catch {
          clearTimeout(timer);
          finish(new Error("讯飞响应解析失败"));
        }
      };

      ws.onerror = () => {
        clearTimeout(timer);
        finish(new Error("WebSocket 连接失败"));
      };

      ws.onclose = () => {
        clearTimeout(timer);
        if (!finished) {
          if (fullText.trim()) {
            finish();
          } else {
            finish(new Error("连接已关闭，未收到回复"));
          }
        }
      };
    } catch (err) {
      clearTimeout(timer);
      cleanup();
      finish(err instanceof Error ? err : new Error("WebSocket 创建失败"));
    }
  });
}
