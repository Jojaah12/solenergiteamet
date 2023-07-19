"use client";
import { Button } from "./ui/button";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="h-screen flex flex-col space-y-20 items-center justify-center text-center overflow-hidden">
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
          <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold text-white">
            Solenergi för en ljusare framtid
          </h1>

          <p className="text-[27px] text-white font-light mt-5">
            Fånga solen, sänk din elräkning och ditt klimatavtryck
          </p>

          <Button
            handleClick={handleScroll}
            className="px-8 rounded-full mt-10"
          >
            Boka konsultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
