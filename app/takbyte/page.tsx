import React from "react";

const Takbyte = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="fixed top-0 left-0 w-full object-cover z-[-1] opacity-90"
          alt="takbyte"
          src="/images/takbyte3.jpg"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Lägga nytt tak med solceller
          </h1>
          <p className="mb-8 leading-relaxed">
            Det kan många gånger vara lönsamt att montera solceller på villan i
            samband med att man lägger ett nytt tak. Lönsamheten är olika hög
            för olika tak och beror till stor del på takets lutning och
            väderstreck – därför är det viktigt att ta reda på när det lönar sig
            för dig att installera solceller på taket innan du bestämmer dig.
            Det gäller oavsett om du har funderingar på att installera ett så
            kallat solcellstak (ett tak med integrerade solceller, eller
            traditionella utanpåliggande solpaneler.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Takbyte;
