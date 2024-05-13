import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

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
            <Script
                async
                src="https://cloud.umami.is/script.js"
                data-website-id="34db6362-d5b5-4e51-8937-dc4c7b7a5006"
            />
            <body>{children}</body>
            <Analytics />
        </html>
    );
}
