import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dylan Vidal",
  description:
    "Resume and Portfolio for Dylan Vidal, an Aspiring Software Engineer",
  keywords: ["Developer", "Software Engineer", "Portfolio", "Dylan Vidal"],
  icons: ["icons8-tarot-cards-doodle-32.png"],
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
