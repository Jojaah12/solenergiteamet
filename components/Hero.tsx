"use client";
import { Button } from "./ui/button";

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
            Solceller & Takbyte
          </h1>
          <p
            className="mb-8 leading-relaxed font-medium lg:w-1/2 w-1/2 text-white"
            data-aos="fade-up"
          >
            Vi är specialister på solcellslösningar och erbjuder en
            helhetslösning för solel. Vår engagerade personal arbetar internt
            för att säkerställa kontroll över hela processen. Du kan känna dig
            trygg med att köpa din lösning av oss.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
