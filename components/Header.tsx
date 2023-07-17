"use client";

import Image from "next/image";
import Link from "next/link";
import { HiBars3CenterLeft } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="sticky top-0 p-6 px-20 flex items-start justify-between xl:items-center bg-white">
      {/* Left side */}
      <div>
        <Link href="/">
          <Image
            src="/images/logo1.png"
            alt="Logo"
            width={200}
            height={100}
          />
        </Link>
      </div>

      {/* Center */}
      <div className="hidden lg:block">
        <ul className="flex bg-black bg-opacity-40 rounded-full border py-4 px-6 border-none space-x-4">
          <Link href="/solceller">
            <li className="hover:bg-opacity-10 transition duration-300 rounded-lg text-white font-normal text-lg">
              Solceller
            </li>
          </Link>
          <Link href="/produkter">
            <li className="hover:bg-opacity-10 transition duration-300 rounded-lg text-white font-normal text-lg">
              Produkter
            </li>
          </Link>
          <Link href="/referencer">
            <li className="hover:bg-opacity-10 transition duration-300 rounded-lg text-white font-normal text-lg">
              Referencer
            </li>
          </Link>
          <Link href="/om-oss">
            <li className="hover:bg-opacity-10 transition duration-300 rounded-lg text-white font-normal text-lg">
              Om oss
            </li>
          </Link>
        </ul>
      </div>

      {/* Right side */}
      <div className="hidden lg:block">
        <Link href="/boka-konsultation">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-4 px-6 rounded-full">
            Boka Konsultation
          </button>
        </Link>
      </div>

      {/* Hamburger menu */}
      <div className="lg:hidden bg-gray-400 bg-opacity-40 rounded-full py-4 px-6">
        <HiBars3CenterLeft className="h-6 w-6 text-white" />
      </div>
    </header>
  );
};

export default Header;
