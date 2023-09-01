import Image from "next/image";

const ArticleBody = () => {
  return (
    <>
      <section className="text-gray-600 bg-white body-font grid grid-cols-1 lg:grid-cols-2 p-6">
        <div className="container px-6 pt-16 mx-auto lg:col-start-1 lg:col-end-2 flex flex-col justify-center">
          <div className="flex flex-wrap w-full " data-aos="fade-up">
            <div className="w-full mb-6 ">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
                Hur fungerar takintegrerade solceller
              </h1>
              <div className="h-1 w-20 bg-[#DBA737] rounded"></div>
            </div>
            <div className="flex-column">
              <p className="w-full leading-relaxed text-black mb-4">
                Det kan många gånger vara lönsamt att montera solceller på
                villan i samband med att man lägger ett nytt tak. Lönsamheten är
                olika hög för olika tak och beror till stor del på takets
                lutning och väderstreck – därför är det viktigt att ta reda på
                när det lönar sig för dig att installera solceller på taket
                innan du bestämmer dig. Det gäller oavsett om du har funderingar
                på att installera ett så kallat solcellstak ett tak med
                integrerade solceller, eller traditionella utanpåliggande
                solpaneler.
              </p>

              <p className="w-full leading-relaxed text-black mb-4">
                Det kan många gånger vara lönsamt att montera solceller på
                villan i samband med att man lägger ett nytt tak. Lönsamheten är
                olika hög för olika tak och beror till stor del på takets
                lutning och väderstreck – därför är det viktigt att ta reda på
                när det lönar sig för dig att installera solceller på taket
                innan du bestämmer dig. Det gäller oavsett om du har funderingar
                på att installera ett så kallat solcellstak ett tak med
                integrerade solceller, eller traditionella utanpåliggande
                solpaneler.
              </p>
            </div>
          </div>
        </div>
        <div className="container px-5 pt-16 mx-auto lg:col-start-2 lg:col-end-3 flex justify-center items-center">
          <Image
            className=""
            src="/images/takbyte4.jpg"
            alt="Takbyte"
            layout="responsive"
            width={400} // Adjust this width to your preferred maximum width
            height={400} // Adjust this height to your preferred maximum height
          />
        </div>
      </section>
    </>
  );
};

export default ArticleBody;
