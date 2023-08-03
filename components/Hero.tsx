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
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl mb-4 font-semibold text-white">
            Solceller & Takbyte, snyggt och enkelt
            <br className="hidden lg:inline-block" />
            med Solenergi Teamet
          </h1>
          <p className="mb-8 leading-relaxed font-medium text-white">
            Vi är specialister på solcellslösningar och erbjuder en
            helhetslösning för solel.
            <br className="hidden lg:inline-block" />
            Vår engagerade personal arbetar internt för att
            säkerställa kontroll över hela processen.
            <br className="hidden lg:inline-block" />
            Du kan känna dig trygg med att köpa din lösning av oss.
            <br className="hidden lg:inline-block" />
            Vi brinner för solenergi och strävar alltid efter bästa
            möjliga resultat.
            <br className="hidden lg:inline-block" />
            Dessutom erbjuder vi takbyte för optimala förutsättningar
            för solcellsanläggningar på ditt tak.
          </p>
          <div className="flex justify-center">
            <Button
              variant="default"
              className="inline-flex items-center border-0 py-1 px-10 mt-4 md:mt-0 rounded-full"
            >
              Boka konsultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
