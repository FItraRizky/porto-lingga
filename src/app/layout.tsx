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
  title: {
    default: "Lingga Fani | Radio Announcer & Voice Talent",
    template: "%s | Lingga Fani",
  },
  description:
    "Professional Portfolio of Lingga Fani, Radio Announcer at RRI PRO 2. Experienced voice talent, MC, and radio broadcaster specializing in professional audio content.",
  keywords: [
    "Lingga Fani",
    "Radio Announcer",
    "RRI PRO 2",
    "Voice Talent",
    "MC",
    "Broadcaster",
    "Radio Personality",
    "Voice Over Artist",
    "Professional Speaker",
    "Audio Content Creator",
  ],
  authors: [{ name: "Lingga Fani" }],
  creator: "Lingga Fani",
  publisher: "Lingga Fani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://linggafani.com"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lingga Fani | Radio Announcer & Voice Talent",
    description:
      "Professional Portfolio of Lingga Fani, Radio Announcer at RRI PRO 2. Experienced voice talent, MC, and radio broadcaster.",
    url: "https://linggafani.com", // Update with your actual domain
    siteName: "Lingga Fani Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Lingga Fani - Radio Announcer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lingga Fani | Radio Announcer & Voice Talent",
    description:
      "Professional Portfolio of Lingga Fani, Radio Announcer at RRI PRO 2.",
    images: ["/og-image.jpg"], // You'll need to add this image
  },
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
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import LightRaysOptimized from "@/components/LightRaysOptimized";
import { LanguageProvider } from "@/context/LanguageContext";

// Viewport configuration for better mobile experience
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lingga Fani",
    jobTitle: "Radio Announcer",
    worksFor: {
      "@type": "Organization",
      name: "RRI PRO 2",
    },
    description:
      "Professional Radio Announcer, Voice Talent, and MC specializing in broadcasting and audio content creation",
    url: "https://linggafani.com",
    sameAs: [
      // Add your social media profiles here
      // "https://instagram.com/yourprofile",
      // "https://linkedin.com/in/yourprofile",
    ],
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          <div className="fixed inset-0 z-0 bg-black">
            <LightRaysOptimized
              className="absolute inset-0"
              followMouse={false}
            />
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
