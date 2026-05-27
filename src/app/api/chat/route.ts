import { NextResponse } from "next/server";

import { pickDemoReply } from "@/lib/ai-persona";
import { sparkAssistantChat } from "@/lib/xfyun-spark";

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(request: Request) {
  let locale: "en" | "zh" = "en";

  try {
    const body = (await request.json()) as {
      messages?: ChatMessage[];
      locale?: "en" | "zh";
    };

    const messages = body.messages ?? [];
    locale = body.locale === "zh" ? "zh" : "en";
    const lastUser = [...messages].reverse().find((m) => m.role === "user");

    if (!lastUser?.content) {
      return NextResponse.json({ error: "No message" }, { status: 400 });
    }

    const apiKey = process.env.XFYUN_API_KEY;
    const apiSecret = process.env.XFYUN_API_SECRET;
    const appId = process.env.XFYUN_APP_ID;
    const assistantId =
      process.env.XFYUN_ASSISTANT_ID ?? "mrmwr31atb9l_v1";
    const host =
      process.env.XFYUN_HOST ?? "spark-openapi.cn-huabei-1.xf-yun.com";

    if (!apiKey || !apiSecret || !appId) {
      return NextResponse.json({
        reply: pickDemoReply(locale, lastUser.content),
        demo: true,
        hint:
          locale === "zh"
            ? "请在 .env.local 配置 XFYUN_API_KEY、XFYUN_API_SECRET、XFYUN_APP_ID"
            : "Configure XFYUN credentials in .env.local",
      });
    }

    const reply = await sparkAssistantChat(messages, {
      host,
      assistantId,
      appId,
      apiKey,
      apiSecret,
      domain: process.env.XFYUN_CHAT_DOMAIN ?? "generalv3",
    });

    return NextResponse.json({ reply, demo: false });
  } catch (error) {
    const isZh = locale === "zh";
    const message =
      error instanceof Error ? error.message : "Chat request failed";

    return NextResponse.json({
      reply: pickDemoReply(isZh ? "zh" : "en", "fallback"),
      demo: true,
      error: message,
    });
  }
}
