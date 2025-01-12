import { Plus_Jakarta_Sans } from "next/font/google";
import "../common/style/globals.css";
import Navbar from "@/common/component/navbar/Navbar";
import { Providers } from "@/common/component/element/Providers";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Automotive AI - Revolutionizing Auto Sales",
  description:
    "Seamlessly combining AI agents, automated data collection, and bulk SMS with autonomous responses—all integrated with lending platforms for a unified sales process.",
  keywords:
    "automotive sales, AI agents, automated data collection, bulk SMS, Credit App, Dealertrack, automotive CRM",
  author: "Automotive AI",
  email: "sales@automotiveai.ca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plus_Jakarta_Sans.className} dark:bg-black`}>
        <Providers>
          <div className="flex justify-center items-center">
            <Navbar />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
