import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const urbanist = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solenergiteamet",
  description: "Solenergi för en ljusare framtid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
