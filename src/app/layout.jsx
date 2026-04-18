import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../common/style/globals.css";
import NavbarWithVariant from "@/common/component/navbar/NavbarWithVariant";
import { ClientProviders } from "./client-providers";
import GoogleTagManager, { GoogleTagManagerNoScript } from "@/common/component/GoogleTagManager";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"]
});

const geist = localFont({
  src: "./fonts/Geist-Variable.ttf",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

const geistMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"]
});

export const metadata = {
  title: "Automotive AI — pipeline that doesn't sleep",
  description:
    "AI agents reach every contact in your DMS, handle objections over SMS and voice, and book real appointments. First results in hours, not months.",
  keywords:
    "automotive sales, AI agents, dealership CRM, lead reactivation, bulk SMS, Dealertrack, automotive AI",
  author: "Automotive AI",
  email: "sales@automotiveai.ca",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:4001"),
  icons: '/darkautoai.svg'
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <GoogleTagManager />
      </head>
      <body
        className="font-geist bg-surface text-secondary dark:bg-black min-h-screen flex flex-col antialiased"
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-4 focus:left-4 focus:bg-secondary focus:text-white focus:px-4 focus:py-2 focus:rounded-md">Skip to content</a>
        <GoogleTagManagerNoScript />
        <ClientProviders>
          <main id="main" className="flex-grow w-full overflow-x-hidden">{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}
