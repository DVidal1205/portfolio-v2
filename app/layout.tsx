import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dylan Vidal",
    description: "A portfolio for Dylan Vidal, an aspiring software engineer.",
    keywords: ["Developer", "Software Engineer", "Portfolio", "Dylan Vidal"],
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
        </html>
    );
}
