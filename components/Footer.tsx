import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "../constants";

const Footer = () => (
  <footer className="flex text-black bg-[#211D1D]  mt-5 border-t border-black">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <Image
          src="/images/logo-footer.png"
          alt="logo"
          width={200}
          height={100}
          className="object-contain"
        />
        <p className="text-base text-black">
          &copy; Solenergi Teamet 2023
        </p>
      </div>

      <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
        {footerLinks.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-6 text-base min-w-[170px]"
          >
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p>@2023 Solenergi Teamet.</p>

      <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
