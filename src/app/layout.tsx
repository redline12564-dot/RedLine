import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Providers } from "@/lib/providers";

const cairo = Cairo({
  variable: "--font-geist-sans",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-geist-mono",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redline-egypt.com"),
  title: {
    default: "RedLine Transport | ريدلاين ايجبت للشحن والنقل السريع في مصر",
    template: "%s | RedLine Transport",
  },
  description:
    "شركة ريد لاين - ريدلاين ايجبت للشحن (RedLine Transport / RedLine Egypt Shipping) - أسرع خدمات الشحن الداخلي، نقل الطرود والبضائع، وشحن نفس اليوم لجميع محافظات مصر مع تتبع حي ومباشر للشحنات بأفضل الأسعار.",
  keywords: [
    // --- العلامة التجارية والبراند (عربي وإنجليزي بكافة الصيغ) ---
    "redline",
    "red line",
    "redline egypt",
    "red line egypt",
    "redline transport",
    "red line transport",
    "redline shipping",
    "red line shipping",
    "redline egypt shipping",
    "red line egypt shipping",
    "redline shipping egypt",
    "redline express",
    "red line express",
    "redline egypt express",
    "redline transport egypt",
    "ريد لاين",
    "ريدلاين",
    "رد لاين",
    "ريد لاين مصر",
    "ريدلاين مصر",
    "ريد لاين ترانسبورت",
    "ريدلاين ترانسبورت",
    "ريدلاين ايجبت للشحن",
    "ريد لاين ايجبت للشحن",
    "ريدلاين ايجيبت للشحن",
    "ريد لاين ايجيبت للشحن",
    "ريدلاين مصر للشحن",
    "ريد لاين مصر للشحن",
    "شركة ريد لاين",
    "شركة ريدلاين",
    "شركة ريدلاين ايجبت",
    "شركة ريد لاين للشحن",
    "عصب الشحن",

    // --- كلمات الشحن والتوصيل والنقل في مصر (عربي) ---
    "شحن",
    "الشحن",
    "شحن مصر",
    "شركات شحن",
    "شركة شحن",
    "شركة شحن مصر",
    "شركة شحن في مصر",
    "شحن داخلي",
    "شحن داخلي مصر",
    "شحن محافظات",
    "شحن طرود",
    "نقل طرود",
    "توصيل طرود",
    "شحن سريع",
    "شحن نفس اليوم",
    "شحن فوري",
    "شحن بضائع",
    "شحن تجاري",
    "شركات توصيل",
    "توصيل سريع",
    "مندوب شحن",
    "تتبع شحنة",
    "تتبع شحنات",
    "تتبع الشحنات",
    "اسعار الشحن",
    "اسعار الشحن الداخلي",
    "خدمات لوجستية مصر",
    "شحن القاهرة",
    "شحن الإسكندرية",
    "شحن القاهرة والإسكندرية",

    // --- كلمات الشحن واللوجستيات والتوصيل (إنجليزي) ---
    "shipping",
    "shipping egypt",
    "shipping companies in egypt",
    "egypt shipping company",
    "courier egypt",
    "courier services",
    "domestic courier egypt",
    "express shipping",
    "same day delivery egypt",
    "parcel delivery",
    "package delivery egypt",
    "express parcel delivery egypt",
    "cargo egypt",
    "cargo transportation egypt",
    "freight egypt",
    "freight forwarding egypt",
    "domestic shipping egypt",
    "logistics egypt",
    "track shipment egypt",
    "fast delivery cairo",
    "ecommerce shipping egypt"
  ],
  authors: [
    { name: "RedLine Transport", url: "https://redline-egypt.com" },
    { name: "RedLine Egypt Shipping", url: "https://redline-egypt.com" }
  ],
  creator: "RedLine Transport",
  publisher: "RedLine Egypt Shipping",
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
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "googlee51727c4dec46798",
  },
  openGraph: {
    title: "RedLine Transport | ريدلاين ايجبت للشحن والنقل السريع",
    description:
      "شركة ريد لاين للشحن - أسرع خدمات الشحن الداخلي، نقل الطرود والبضائع، وتغطية شاملة لجميع محافظات مصر مع تتبع لحظي للشحنات بأفضل الأسعار.",
    url: "https://redline-egypt.com",
    siteName: "RedLine Transport | RedLine Egypt Shipping",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "RedLine Egypt Shipping Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "RedLine Transport | ريدلاين ايجبت للشحن",
    description: "أسرع خدمات الشحن الداخلي ونقل الطرود والبضائع وتتبع الشحنات في مصر.",
    images: ["/icon.png"],
  },
  alternates: {
    canonical: "https://redline-egypt.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DeliveryService",
    name: "RedLine Transport",
    alternateName: [
      "RedLine Egypt Shipping",
      "ريدلاين ايجبت للشحن",
      "ريد لاين ايجبت للشحن",
      "ريد لاين",
      "ريدلاين للشحن",
      "RedLine Egypt",
      "ريد لاين مصر للشحن",
      "عصب الشحن"
    ],
    url: "https://redline-egypt.com",
    logo: "https://redline-egypt.com/icon.png",
    description:
      "شركة ريد لاين - ريدلاين ايجبت للشحن (RedLine Egypt Shipping) المتخصصة في الشحن السريع ونقل الطرود والبضائع وتغطية جميع محافظات مصر.",
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
    serviceType: [
      "Domestic Shipping",
      "Express Delivery",
      "Same Day Delivery",
      "Parcel Transportation",
      "Cargo Delivery",
      "شحن داخلي",
      "شحن طرود",
      "شحن سريع",
      "توصيل نفس اليوم",
      "نقل بضائع"
    ],
  };

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cairo.variable} ${tajawal.variable} antialiased bg-background text-foreground font-sans`}>
        <Providers>
          {children}
          <Toaster />
          <SonnerToaster position="top-center" richColors />
        </Providers>
      </body>
    </html>
  );
}