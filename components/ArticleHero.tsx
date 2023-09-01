"use client";
import { Button } from "./ui/button";

const ArticleHero = () => {
  return (
    <div className="h-3/4 flex overflow-hidden">
      <img
        className="fixed top-0 left-0 w-full h-screen object-cover z-[-1] opacity-90"
        src="/images/takbyte3.jpg"
      ></img>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start 
        md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            className="text-6xl lg:w-1/2 mb-4 font-semibold text-white"
            data-aos="fade-up"
          >
            Takbyte
          </h1>
          <p
            className="mb-8 leading-relaxed font-medium lg:w-1/2 w-1/2 text-white"
            data-aos="fade-up"
          >
            Det kan många gånger vara lönsamt att montera solceller på villan i
            samband med att man lägger ett nytt tak. Lönsamheten är olika hög
            för olika tak och beror till stor del på takets lutning och
            väderstreck – därför är det viktigt att ta reda på när det lönar sig
            för dig att installera solceller på taket innan du bestämmer dig.
            Det gäller oavsett om du har funderingar på att installera ett så
            kallat solcellstak ett tak med integrerade solceller, eller
            traditionella utanpåliggande solpaneler.
          </p>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;
