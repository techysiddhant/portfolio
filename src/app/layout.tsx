import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from 'next/font/google'
import { twMerge } from "tailwind-merge";
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
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
