import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ResponsiveDiv from "@/components/shared/ResponsiveDiv";

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Developerslook Job Task",
};

import { Manrope } from '@next/font/google';


const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={``}>
        <div className={`flex flex-col min-h-screen text-primaryText ${manrope.className} `}>
          <Navbar />
          <div className="flex flex-grow" >
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
