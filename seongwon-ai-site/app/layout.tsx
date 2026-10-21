import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이성원 | 누구나 쉬운 AI",
  description: "AI 강사 이성원과 함께하는 쉬운 AI. 매월 오프라인 강의에서 배우고 바로 활용하세요.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
