import Image from "next/image";
import React from "react";

const BenefitsSection = () => {
  return (
    <section>
      <div className="px-4 py-12 mx-auto bg-gray-200 max-w-7xl shadow-lg sm:px-6 md:px-12 rounded-lg lg:px-24 lg:py-24 relative">
        <div className="after:absolute after:inset-x-0 after:w-full after:h-4 after:bg-gradient-to-b from-transparent "></div>

        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 rounded-full bg-[#d9b465] -left-4 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>

                <div className="absolute rounded-full bg-[#deb868] -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <Image
                    height={500}
                    width={500}
                    alt=""
                    className="object-center mx-auto rounded-lg shadow-2xl"
                    src="/images/energy.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-8 text-xs font-bold tracking-widest text-[#DBA737] uppercase">
              Solenergiteamet
            </span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              Varför välja oss?
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
              Välj Solenergiteamet för en solig framtid utan bekymmer.
              Vi är din valda solpanelmontör av många skäl. Vi
              erbjuder enastående lokal expertis, och våra
              specialister förstår de specifika behoven i din region.
              Vår erfarna personal på Solenergiteamet är redo att
              guida dig genom installationsprocessen, från bedömning
              till underhåll. Vi förstår vikten av att anpassa
              lösningar efter dina behov. Genom att välja oss väljer
              du inte bara solenergi – du väljer en partner för din
              hållbara framtid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
