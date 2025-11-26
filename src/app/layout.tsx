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
  title: "Lingga Fani | Professional Radio Announcer at RRI PRO 2",
  description:
    "Professional Portfolio of Lingga Fani, an experienced Radio Announcer at RRI PRO 2. Discover my broadcasting journey, programs, and achievements in the radio industry.",
  keywords: [
    "Lingga Fani",
    "Radio Announcer",
    "RRI PRO 2",
    "Broadcasting",
    "Radio Presenter",
    "Voice Talent",
    "Indonesian Radio",
    "Professional Announcer",
  ],
  authors: [{ name: "Lingga Fani" }],
  creator: "Lingga Fani",
  publisher: "Lingga Fani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: "https://linggafani.com",
    title: "Lingga Fani | Professional Radio Announcer at RRI PRO 2",
    description:
      "Professional Portfolio of Lingga Fani, an experienced Radio Announcer at RRI PRO 2. Discover my broadcasting journey, programs, and achievements.",
    siteName: "Lingga Fani Portfolio",
    images: [
      {
        url: "/profile-lingga.jpg",
        width: 1200,
        height: 630,
        alt: "Lingga Fani - Radio Announcer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lingga Fani | Professional Radio Announcer",
    description:
      "Professional Portfolio of Lingga Fani, Radio Announcer at RRI PRO 2",
    images: ["/profile-lingga.jpg"],
    creator: "@linggafani",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://linggafani.com",
    languages: {
      "en-US": "https://linggafani.com/en",
      "id-ID": "https://linggafani.com/id",
    },
  },
};

import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import LightRays from "@/components/LightRays";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://linggafani.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          <div className="fixed inset-0 z-0 bg-black will-change-transform">
            <LightRays className="absolute inset-0" />
          </div>
          <div className="relative z-10">
            <SmoothScroll />
            <Navbar />
            <main className="min-h-screen flex flex-col">{children}</main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
