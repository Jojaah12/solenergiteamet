"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sticky-header">
      {/* Left side */}
      <Link href="/" className="flex items-center mb-4 md:mb-0">
        <Image
          src="/images/logo2.png"
          alt="Logo"
          width={200}
          height={150}
          className="object-contain "
        />
      </Link>
      {/* Center */}

      <Menu />

      {/* Right side */}
      <div className="">
        <Button
          variant="default"
          className="inline-flex items-center border-0 py-1 px-10 mt-4 md:mt-0 rounded-full"
        >
          Boka konsultation
        </Button>
      </div>
    </div>
  );
};
export default Header;
