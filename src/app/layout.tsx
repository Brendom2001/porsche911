import type { Metadata } from "next";
import { Bebas_Neue, Libre_Baskerville, Outfit } from "next/font/google";
import ProgressBar from "@/components/ui/ProgressBar";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Porsche 911 — A Essência da Perfeição",
  description: "Sessenta anos de engenharia alemã. Uma forma que nunca envelheceu.",
  openGraph: {
    title: "Porsche 911",
    description: "A Essência da Perfeição",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${libreBaskerville.variable} ${outfit.variable}`}
    >
      <body>
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
