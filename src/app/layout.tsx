import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lingga Fani | Radio Announcer",
  description:
    "Professional Portfolio of Lingga Fani, Radio Announcer at RRI PRO 2.",
};

import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import LightRays from "@/components/LightRays";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="fixed inset-0 z-0 bg-black">
          <LightRays className="absolute inset-0" />
        </div>
        <div className="relative z-10">
          <SmoothScroll />
          <Navbar />
          <main className="min-h-screen flex flex-col">{children}</main>
        </div>
      </body>
    </html>
  );
}
