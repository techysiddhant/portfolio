import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Siddhant Jain's Portfolio",
    short_name: "Sid's Portfolio",
    description:
      "Full Stack Web Developer with expertise in React.js, Next.js, Node.js, and TypeScript. View my portfolio to see user-friendly, scalable web applications, and clean code solutions for modern digital challenges",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
