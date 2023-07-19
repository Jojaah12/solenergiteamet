import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

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
      <body>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
