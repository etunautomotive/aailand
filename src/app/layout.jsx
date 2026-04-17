import { Space_Grotesk, Inter } from "next/font/google";
import "../common/style/globals.css";
import NavbarWithVariant from "@/common/component/navbar/NavbarWithVariant";
import { ClientProviders } from "./client-providers";
import GoogleTagManager, { GoogleTagManagerNoScript } from "@/common/component/GoogleTagManager";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Automotive AI - Revolutionizing Auto Sales",
  description:
    "Seamlessly combining AI agents, automated data collection, and bulk SMS with autonomous responses, all integrated with lending platforms for a unified sales process.",
  keywords:
    "automotive sales, AI agents, automated data collection, bulk SMS, Credit App, Dealertrack, automotive CRM",
  author: "Automotive AI",
  email: "sales@automotiveai.ca",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:4000"),
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
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        <GoogleTagManager />
      </head>
      <body
        className="font-inter dark:bg-black min-h-screen flex flex-col"
      >
        <GoogleTagManagerNoScript />
        <ClientProviders>
          <main className="flex-grow w-full overflow-x-hidden">{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}
