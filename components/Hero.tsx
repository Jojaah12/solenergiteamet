"use client";

import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Solenergi för en ljusare framtid
        </h1>

        <p className="text-[27px] text-black-100 font-light mt-5">
          Fånga solen, sänk din elräkning och ditt klimatavtryck
        </p>

        <Button handleClick={handleScroll}>Boka konsultation</Button>
      </div>
    </div>
  );
};

export default Hero;
