import type { Metadata } from "next";
import { VibeKanbanProvider } from "@/components/VibeKanbanProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToDo App",
  description: "シンプルなタスク管理Webアプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <VibeKanbanProvider />
        {children}
      </body>
    </html>
  );
}
