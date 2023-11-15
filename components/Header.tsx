"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const handleButtonClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sticky-header">
      {/* Left side */}
      <Link href="/" className="flex items-center mb-4 md:mb-0">
        <Image
          src="/images/logo2.png"
          alt="Logo"
          width={150}
          height={150}
          priority
          className="object-contain w-auto h-auto "
        />
      </Link>
      {/* Center */}

      <Menu />
      <HamburgerMenu />

      {/* Right side */}
      <div className="">
        <Button
          onClick={handleButtonClick}
          variant="default"
          className="inline-flex items-center border-0 py-1 px-10 mt-4 md:mt-0 rounded-full"
        >
          Boka konsultation
        </Button>
      </div>
    </header>
  );
};
export default Header;
