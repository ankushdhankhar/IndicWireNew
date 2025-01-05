import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import {Poppins} from "next/font/google"
import { Suspense } from "react";
const poppins=Poppins({subsets:["latin"],weight:["400","500"]})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Indic Wire",
  description: "Catch up on the latest flip-flop news with a quick toggle view!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-white`}
      >
        <Suspense> 
    {/* usesearchparm should be wrapped in suspense boundary. Navbar is using it to highlight link*/}
        <Navbar/>
        </Suspense>


        {children}

      </body>
    </html>
  );
}
