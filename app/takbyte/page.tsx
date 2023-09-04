import Image from "next/image";
import { takbyteData } from "../../lib/data";

const Takbyte = () => {
  return (
    <>
      {takbyteData.map((article) => (
        <div key={article.id}>
          <section className="flex">
            <div className="h-screen fixed top-0 left-0 w-full object-fit z-[-1]">
              <Image
                className="opacity-16"
                src={article.image}
                alt={article.mainTitle}
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
                  {article.mainTitle}
                </h1>
                <p
                  className="mb-8 leading-relaxed font-medium lg:w-1/2 w-1/2 text-white"
                  data-aos="fade-up"
                >
                  {article.subtitle}
                </p>
                <div className="flex justify-center"></div>
              </div>
            </div>
          </section>
          <section className="text-gray-600 bg-white body-font grid grid-cols-1 lg:grid-cols-2 p-6">
            <div className="container px-6 pt-16 mx-auto lg:col-start-1 lg:col-end-2 flex flex-col justify-center">
              <div className="flex flex-wrap w-full " data-aos="fade-up">
                <div className="w-full mb-6 ">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
                    {article.blockTitle}
                  </h1>
                  <div className="h-1 w-20 bg-[#DBA737] rounded"></div>
                </div>
                <div className="flex-column">
                  <p className="w-full leading-relaxed text-black mb-4">
                    {article.blockText}
                  </p>
                </div>
              </div>
            </div>
            <div className="container px-5 pt-16 mx-auto lg:col-start-2 lg:col-end-3 flex justify-center items-center">
              <Image
                className=""
                src={article.blockImage}
                alt="Takbyte"
                layout="responsive"
                width={400} // Adjust this width to your preferred maximum width
                height={400} // Adjust this height to your preferred maximum height
              />
            </div>
          </section>
        </div>
      ))}
    </>
  );
};

export default Takbyte;
