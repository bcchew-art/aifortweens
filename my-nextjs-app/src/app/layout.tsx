import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Agent Chat",
  description: "Chat with my 21st SDK agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
