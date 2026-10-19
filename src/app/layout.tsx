import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  preload: false,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dadstudioarch.com"),
  title: "DADSTUDIOARCH | Architecture, Construction & Interior Design",
  description:
    "Explore DADSTUDIOARCH for architectural design, construction, interior and exterior design, and UPVC windows and doors solutions.",
  icons: {
    icon: "/brand/dadstudioarch-favicon.svg",
    shortcut: "/brand/dadstudioarch-favicon.svg",
    apple: "/brand/dadstudioarch-favicon.svg",
  },
  openGraph: {
    title: "DADSTUDIOARCH | Architecture, Construction & Interior Design",
    description:
      "Explore DADSTUDIOARCH for architectural design, construction, interior and exterior design, and UPVC windows and doors solutions.",
    siteName: "DADSTUDIOARCH",
    images: [
      {
        url: "/images/hero/hero-villa-exterior.jpg",
        width: 1200,
        height: 675,
        alt: "DADSTUDIOARCH Architecture & Construction",
      },
    ],
  },
};

import LenisProvider from "@/Animations/LenisProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
