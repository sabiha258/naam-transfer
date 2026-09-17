import type { Metadata, Viewport } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { GrainOverlay } from "@/components/motion/GrainOverlay";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.naamtransfer.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Naam Transfer — Electricity, Gas & AMC Name Transfer in Ahmedabad",
    template: "%s | Naam Transfer",
  },
  description:
    "We don't just transfer names. We activate homes. Electricity, gas, and municipal name transfer after possession — handled end to end, no office visits.",
  openGraph: {
    type: "website",
    siteName: "Naam Transfer",
    title: "Naam Transfer — Electricity, Gas & AMC Name Transfer in Ahmedabad",
    description: "We don't just transfer names. We activate homes. Electricity, gas, and municipal name transfer after possession.",
    url: SITE_URL,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Naam Transfer — We don't transfer names. We activate homes.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naam Transfer — Electricity, Gas & AMC Name Transfer in Ahmedabad",
    description: "Electricity, gas, and municipal name transfer after possession — handled end to end, no office visits.",
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbf4" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1421" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Naam Transfer",
  slogan: "easy ho gaya.",
  url: SITE_URL,
  telephone: "+91-92745-10633",
  email: "naamtransfer@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "305, One World Capital, Beside La Renon, Off Rajpath Rangoli Road, Bodakdev",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380059",
    addressCountry: "IN",
  },
  areaServed: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  sameAs: [
    "https://instagram.com/naam_transfer",
    "https://facebook.com/Naamtransfer",
    "https://youtube.com/@NAAMTransfer",
  ],
};

import { BookServiceModalProvider } from "@/context/ModalContext";
import { BookServiceModal } from "@/components/book-service/BookServiceModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased selection:bg-brand-primary/20`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <BookServiceModalProvider>
          <SmoothScroll />
          <GrainOverlay />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <BookServiceModal />
        </BookServiceModalProvider>
        <a
          href="https://wa.me/919274510633"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.482-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
