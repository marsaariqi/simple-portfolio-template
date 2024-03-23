import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar_footer/Navbar";
import Footer from "@/components/navbar_footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio template",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col overflow-x-hidden">
          <div className="bg-base-200 w-full fixed top-0 z-50">
            <Navbar />
          </div>
          <div className="grow">
            {children}
          </div>
          <div className="bg-base-300 w-full">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
