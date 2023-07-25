import Image from "next/image";

const Content = () => {
  return (
    <section className="text-gray-600 bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <div className="h-1 w-20 bg-[#DBA737] rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-black">
            Whatever cardigan tote bag tumblr hexagon brooklyn
            asymmetrical gentrify, subway tile poke farm-to-table.
            Franzen you probably haven&apos;t heard of them man bun
            deep jianbing selfies heirloom prism food truck ugh squid
            celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                src="/images/content-1.jpg"
                alt="content"
                width={200}
                height={150}
                className="rounded w-full object-contain mb-6"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Chichen Itza
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat.
                Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                src="/images/content-2.jpg"
                alt="content"
                width={200}
                height={150}
                className="rounded w-full object-contain mb-6"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Colosseum Roma
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat.
                Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                src="/images/content-3.jpg"
                alt="content"
                width={200}
                height={150}
                className="rounded w-full object-contain mb-6"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Great Pyramid of Giza
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat.
                Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                src="/images/content-4.jpg"
                alt="content"
                width={200}
                height={150}
                className="rounded w-full object-contain mb-6"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                San Francisco
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat.
                Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
