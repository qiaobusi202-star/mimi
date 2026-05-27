"use client";

import { FormEvent, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useLocale } from "@/components/providers/LocaleProvider";
import { heroContent } from "@/lib/hero-content";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

type AiChatPanelProps = {
  onActiveChange?: (active: boolean) => void;
};

export function AiChatPanel({ onActiveChange }: AiChatPanelProps) {
  const { locale } = useLocale();
  const copy = heroContent[locale];
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  const send = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    onActiveChange?.(true);
    scrollToBottom();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          locale,
        }),
      });

      const data = (await res.json()) as { reply: string; demo?: boolean };

      setDemoMode(!!data.demo);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            locale === "zh"
              ? "连接暂时不可用，请稍后再试。"
              : "Connection unavailable. Please try again shortly.",
        },
      ]);
    } finally {
      setLoading(false);
      onActiveChange?.(false);
      scrollToBottom();
    }
  };

  return (
    <div className="flex min-h-[240px] flex-col rounded-[22px] border border-white/[0.06] bg-black/25 p-4 md:min-h-[260px] md:p-5">
      <p className="mb-1 text-xs font-light text-muted/90">{copy.aiHint}</p>

      <div
        ref={listRef}
        className="mb-3 mt-3 flex-1 space-y-2.5 overflow-y-auto pr-1"
        style={{ maxHeight: "180px" }}
      >
        {messages.length === 0 && (
          <p className="text-xs font-light leading-relaxed text-muted/50">
            {locale === "zh"
              ? "你好，我是曾道炜的数字分身。想了解什么？"
              : "Hello — I'm Zeng's digital persona. What would you like to know?"}
          </p>
        )}
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
              className={`max-w-[95%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed md:text-[13px] ${
                msg.role === "user"
                  ? "ml-auto bg-white/[0.08] text-foreground"
                  : "mr-auto border border-white/[0.06] bg-white/[0.03] text-muted"
              }`}
            >
              {msg.content}
            </motion.div>
          ))}
        </AnimatePresence>
        {loading && (
          <p className="text-xs text-muted/60">{copy.aiThinking}</p>
        )}
      </div>

      {demoMode && (
        <p className="mb-2 text-[10px] leading-relaxed text-muted/40">
          {copy.aiOffline}
        </p>
      )}

      <form onSubmit={send} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={copy.aiPlaceholder}
          disabled={loading}
          className="flex-1 rounded-xl border border-white/[0.08] bg-black/40 px-3.5 py-2.5 text-xs text-foreground outline-none transition-colors placeholder:text-muted/40 focus:border-accent/30 md:text-sm"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="shrink-0 rounded-xl border border-white/10 bg-accent/20 px-4 py-2.5 text-xs tracking-wide text-foreground transition-all duration-300 hover:bg-accent/30 disabled:opacity-40"
        >
          {copy.aiSend}
        </button>
      </form>
    </div>
  );
}
