"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="sticky top-0 p-2 flex item-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <nav className="flex flex-row items-center">
        {/* Left side */}
        <Link href="/">
          <Image
            src="/images/logo2.png"
            alt="Logo"
            width={200}
            height={100}
            className="object-contain"
          />
        </Link>

        <Menu />

        {/* Right side */}
        <div className="hidden md:block lg:block">
          <Button variant="default" className="px-8 rounded-full">
            Boka konsultation
          </Button>
        </div>
        {/* Hamburger menu */}
        <div></div>
      </nav>
    </header>
  );
};
export default Header;
