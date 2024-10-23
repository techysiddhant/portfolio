import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from 'next/font/google'
import { twMerge } from "tailwind-merge";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({ subsets: ['latin'], weight: '400', variable: '--font-serif' });
export const metadata: Metadata = {
  title: {
    default: "Siddhant Jain's Portfolio",
    template: "%s | Portfolio"
  },
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "Front-end Development",
    "Back-end Development",
    "Web Applications",
    "React.js",
    "Next.js",
    "Digital Solutions",
  ],
  description: "Full Stack Web Developer with expertise in React.js, Next.js, Node.js, and TypeScript. View my portfolio to see user-friendly, scalable web applications, and clean code solutions for modern digital challenges",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "Full Stack Developer | Expert in React, Next.js, & Node.js",
    description:
      "Explore my portfolio showcasing high-quality web applications built with React, Next.js, Node.js, and TypeScript. As a Full Stack Developer, I specialize in creating scalable, responsive, and user-focused digital solutions",
    images: ["/opengraph-image.png"],
  },
  metadataBase: new URL("https://www.siddhantjain.co.in/")
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
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </head>
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>
        <Toaster richColors position="top-right" />
        {children}</body>
      <GoogleAnalytics gaId={process.env.GTM_ID!} />
    </html>
  );
}
