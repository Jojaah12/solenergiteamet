"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 p-6 px-20 flex items-start justify-between xl:items-center bg-white">
      {/* Left side */}

      <Link href="/">
        <Image
          src="/images/logo1.png"
          alt="Logo"
          width={200}
          height={100}
        />
      </Link>

      {/* Center */}
      <div className=""></div>

      {/* Right side */}
      <div className="p-4">
        <Button>Boka konsultation</Button>
      </div>
      {/* Hamburger menu */}
      <div></div>
    </header>
  );
};

export default Header;
