import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Aakash — Cyber-Sentry & Linux Systems Engineer Portfolio",
  description:
    "Aakash — Final-year BCA student at Ranchi University, Arch Linux devotee. Building resilient self-hosted infrastructure, custom Arch Linux distributions, and cybersecurity tooling.",
  keywords: [
    "Aakash",
    "Linux Systems Engineer",
    "Arch Linux",
    "Cybersecurity",
    "Homelab",
    "Umbrella-Corporation_OS",
    "Ranchi University",
  ],
  authors: [{ name: "Aakash" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#000000] text-[#b9cacb] font-body selection:bg-[#00f0ff] selection:text-[#000000]">
        {children}
      </body>
    </html>
  );
}
