import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import StructuredData from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youtube Thumbnail Downloader",
  description: "Download any youtube video thumbnail for FREE!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
