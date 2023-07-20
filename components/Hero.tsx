"use client";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-screen object-cover z-[-1]"
      >
        <source src="/images/intro1.mp4" type="video/mp4" />
      </video>
      <div className="flex xl:flex-row flex-col gap-5 max-w-[1440px] mx-auto relative z-1">
        <div className="flex-1 pt-36 px-16">
          <h1 className=" font-bold text-white text-5xl lg:text-6xl xl:text-6xl">
            Solceller & Takbyte, snyggt och enkelt med Solenergi
            Teamet
          </h1>

          <p className="text-[27px] text-white font-light mt-5 sm:text-[20px]">
            Vi är en dedikerad helhetsleverantör av solceller,
            laddstationer, och batterier för solel. Vi har all
            personal anställd hos oss vilket gör att vi har kontroll
            över hela processen, så att du kan känna dig trygg med att
            köpa din lösning av oss. Vi älskar solen lite mer än
            andra.
          </p>

          <Button className="px-8 rounded-full mt-10 hidden sm:block">
            Boka konsultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
