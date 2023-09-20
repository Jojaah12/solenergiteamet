import Image from "next/image";
import { takbyteData } from "../../lib/data";
import GridContainer from "@/components/GridContainer";

const Takbyte = () => {
  return (
    <>
      <div className="flex">
        <div className=" h-screen fixed top-0 left-0 w-full object-fit z-[-1]">
          <Image
            className="opacity-16"
            src="/images/green2.jpg"
            alt="Takbyte"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom right"
          />
        </div>
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
              Det kan många gånger vara lönsamt att montera solceller på villan
              i samband med att man lägger ett nytt tak
            </p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </div>
      <div className="sm:h-0 lg:h-20  bg-white"></div>
      {takbyteData.map((article, index) => (
        <div
          key={article.id}
          className="grid grid-cols-1 lg:grid-cols-2 text-gray-600 bg-white body-font "
        >
          {index % 2 === 0 ? (
            <>
              <GridContainer>
                <div className="w-full lg:p-16 p-6">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
                    {article.blockTitle}
                  </h1>
                  <div className="h-1 w-20 bg-[#DBA737] rounded"></div>
                  <div className="flex-column mt-6">
                    <p className="w-full leading-relaxed text-black mb-4">
                      {article.blockText}
                    </p>
                  </div>
                </div>
              </GridContainer>

              <GridContainer>
                <Image
                  className=""
                  src={article.blockImage}
                  alt="Takbyte"
                  layout="fill"
                  objectFit="cover"
                />
              </GridContainer>
              <div className="max-lg:h-20 lg:h-0  bg-white"></div>
            </>
          ) : (
            <>
              <GridContainer>
                <Image
                  className=""
                  src={article.blockImage}
                  alt="Takbyte"
                  layout="fill"
                  objectFit="cover"
                />
              </GridContainer>

              <GridContainer>
                <div className="w-full lg:p-16 p-6">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
                    {article.blockTitle}
                  </h1>
                  <div className="h-1 w-20 bg-[#DBA737] rounded"></div>
                  <div className="flex-column mt-6">
                    <p className="w-full leading-relaxed text-black mb-4">
                      {article.blockText}
                    </p>
                  </div>
                </div>
              </GridContainer>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Takbyte;
