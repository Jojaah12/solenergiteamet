import Image from "next/image";

const ArticleHero = () => {
  return (
    <div className="flex overflow-hidden">
      <Image
        className="fixed top-0 left-0 w-full h-screen object-fit z-[-1] opacity-90"
        src="/images/takbyte1.jpg"
        alt="Takbyte"
        width={100}
        height={50}
      />
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
            samband med att man lägger ett nytt tak.
          </p>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;
