import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from 'next/font/google'
import { twMerge } from "tailwind-merge";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({ subsets: ['latin'], weight: '400', variable: '--font-serif' });
export const metadata: Metadata = {
  title: "Siddhant Jain's Portfolio",
  description: "Full Stack Web Developer with expertise in React.js, Next.js, Node.js, and TypeScript. View my portfolio to see user-friendly, scalable web applications, and clean code solutions for modern digital challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>
        <Toaster richColors position="top-right" />
        {children}</body>
    </html>
  );
}
