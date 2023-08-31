import React from "react";

const Takbyte = () => {
  return (
    <div className="relative">
      <img
        src="/images/takbyte4.jpg"
        alt="Header"
        className=" z-0 w-full top-0 object-cover object-fit max-h-52"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded">
          Takbyte
        </h1>
      </div>

      <div className="mt-8 p-4">
        <p className="text-lg">
          Det kan många gånger vara lönsamt att montera solceller på villan i
          samband med att man lägger ett nytt tak. Lönsamheten är olika hög för
          olika tak och beror till stor del på takets lutning och väderstreck –
          därför är det viktigt att ta reda på när det lönar sig för dig att
          installera solceller på taket innan du bestämmer dig. Det gäller
          oavsett om du har funderingar på att installera ett så kallat
          solcellstak ett tak med integrerade solceller, eller traditionella
          utanpåliggande solpaneler.
        </p>
      </div>
    </div>
  );
};

export default Takbyte;
