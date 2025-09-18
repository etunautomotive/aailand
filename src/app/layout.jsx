import { Plus_Jakarta_Sans } from "next/font/google";
import "../common/style/globals.css";
import NavbarWithVariant from "@/common/component/navbar/NavbarWithVariant";
import Footer from "@/common/Footer";
import { ClientProviders } from "./client-providers";
import FacebookPixel from "@/common/component/FacebookPixel";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plus_Jakarta_Sans.className} dark:bg-black min-h-screen flex flex-col`}
      >
        <FacebookPixel />
        <ClientProviders>
          <div className="flex justify-center items-center w-full">
            <NavbarWithVariant />
          </div>
          <main className="flex-grow w-full overflow-x-hidden">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
