import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Navbar } from "@/components/layout/Navbar";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { PageTransition } from "@/components/ui/PageTransition";

import "./globals.css";

export const metadata: Metadata = {
  title: "Zeng Daowei — Digital Atelier",
  description:
    "Creative technologist — cinematic interfaces, Web3D, and AI persona.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <LocaleProvider>
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
        </LocaleProvider>
      </body>
    </html>
  );
}
