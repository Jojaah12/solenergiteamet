import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Products from "@/components/Products";

const font = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

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
      <body className={font.className}>
        <video
          autoPlay
          muted
          loop
          className="fixed top-0 left-0 w-full h-screen object-cover z-0"
        >
          <source src="/images/intro1.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Header />
          <Products />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
