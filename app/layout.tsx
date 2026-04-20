import type { Metadata } from "next";
import { Fraunces, Italiana, Archivo } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akwaba Etnicas | African Fashion & Art House — Altea, Spain",
  description:
    "African fashion and art house in Altea, Alicante. Original paintings, handcrafted garments, statement handbags and headwraps from the African continent.",
  openGraph: {
    title: "Akwaba Etnicas",
    description:
      "African fashion and art house in Altea, Spain. Paintings, garments, handbags & headwraps.",
    url: "https://www.akwabaetnicas.com",
    siteName: "Akwaba Etnicas",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Akwaba Etnicas",
  description:
    "African fashion and art house. Paintings, garments, handbags and headwraps.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C/Tirant lo Blanc, 6 Loc. 2-3 27A",
    addressLocality: "Altea",
    postalCode: "03590",
    addressRegion: "Alicante",
    addressCountry: "ES",
  },
  telephone: "+2250704854478",
  email: "akwabaakwabaethniques@gmail.com",
  url: "https://www.akwabaetnicas.com",
  sameAs: ["https://www.facebook.com/profile.php?id=100083202807448"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${italiana.variable} ${archivo.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
