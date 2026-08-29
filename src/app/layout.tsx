import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://thomas-zanitti-avocat.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Thomas Zanitti — Avocat au Barreau de Brest",
  description:
    "Récupération de fonds après escroquerie. Thomas Zanitti, avocat au Barreau de Brest, accompagne les victimes de fraudes par virement bancaire ou cryptomonnaie. Déposez une demande en ligne.",
  keywords: [
    "avocat Brest",
    "récupération de fonds",
    "escroquerie",
    "fraude virement bancaire",
    "cryptomonnaie arnaque",
    "Thomas Zanitti",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Thomas Zanitti — Avocat au Barreau de Brest",
    description:
      "Récupération de fonds après escroquerie. Accompagnement dédié pour les victimes de fraudes par virement bancaire ou cryptomonnaie.",
    url: siteUrl,
    siteName: "Thomas Zanitti — Avocat",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/thomas-zanitti.png",
        width: 513,
        height: 409,
        alt: "Thomas Zanitti, avocat au Barreau de Brest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Zanitti — Avocat au Barreau de Brest",
    description:
      "Récupération de fonds après escroquerie. Accompagnement dédié pour les victimes de fraudes.",
    images: ["/images/thomas-zanitti.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}