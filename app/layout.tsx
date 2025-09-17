import type {Metadata, Viewport} from "next";
import "./globals.css";
import {Footer2} from "@/app/components/Footer";
import { Inter } from "next/font/google"
import {Contact7} from "@/app/components/Contact";
import Header from "@/app/components/Header";
import CookieBanner from "@/app/components/CookieBanner";
import Script from 'next/script'

const inter = Inter({
    subsets: ["latin", "latin-ext" ],
    display: "swap",
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Schwakov – Likvidace kapalných odpadů",
    description: "Schwakov s. r. o. – Odborníci na likvidaci kapalných odpadů. Poskytujeme certifikovaná řešení pro firmy i jednotlivce.",
    verification: {
        google: "cvqmpNoT9m09vkB2imkSaRYAJs9trgFSxMbvVXfSPeY",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="cs" className="scroll-smooth">
    <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
            {`function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MFPRXK8S';`}
        </Script>
    </head>
      <body
          className={`${inter.variable} antialiased flex flex-col justify-center px-4 md:px-8 py-6 md:py-8 gap-8 min-h-screen bg-background text-foreground`}>
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MFPRXK8S"
                            height="0" width="0" style={{display: 'none', visibility: 'hidden'}}>

            </iframe>
        </noscript>
      <Header></Header>
      <main className="flex flex-col gap-20 md:gap-28 max-w-7xl mx-auto w-full">
          {children}
          <Contact7></Contact7>
          <CookieBanner></CookieBanner>
      </main>
      <footer className="max-w-7xl mx-auto w-full">
          <Footer2></Footer2>
      </footer>
      </body>
    </html>
  );
}
