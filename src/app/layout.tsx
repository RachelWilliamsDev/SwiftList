import { TooltipProvider } from '@/components/ui/tooltip';
import { siteConfig } from '@/config/site';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import '../styles/globals.css';
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Task manager for the busy developer',
  icons: [
    {
      url: '/favicon.ico',
      href: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <TooltipProvider>
          <body className="h-screen antialiased">{children}</body>
        </TooltipProvider>
      </html>
    </ClerkProvider>
  );
}
