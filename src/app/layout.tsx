import { TooltipProvider } from '@/components/ui/tooltip';
import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'SwiftList',
  description: 'Task manager for the busy developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProvider>
        <body className="antialiased">{children}</body>
      </TooltipProvider>
    </html>
  );
}
