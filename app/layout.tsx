import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
