import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Contact from "@/components/contactForm/Contact";
import Favicon from "../public/logo.svg";

const urbanist = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solenergiteamet",
  description: "Solenergi för en ljusare framtid",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
