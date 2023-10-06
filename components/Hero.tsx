"use client";

import { HERODATA } from "@/lib/constants";

const Hero = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-screen object-cover z-[-1] opacity-90"
      >
        <source src="/images/intro4.mp4" type="video/mp4" />
      </video>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start 
        md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            className="text-6xl lg:w-1/2 mb-4 font-semibold text-white"
            data-aos="fade-up"
          >
            {HERODATA.HEADING}
          </h1>
          <p
            className="mb-8 leading-relaxed font-medium lg:w-1/2 w-1/2 text-white"
            data-aos="fade-up"
          >
            {HERODATA.SUBHEADING}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
