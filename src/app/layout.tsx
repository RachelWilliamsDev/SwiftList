import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftList",
  description: "Task manager for the busy developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
