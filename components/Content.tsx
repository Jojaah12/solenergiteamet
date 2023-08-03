import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <>
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            className="flex flex-wrap w-full mb-20"
            data-aos="fade-up"
          >
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
                Ta reda på mer om våra solcellslösningar
              </h1>
              <div className="h-1 w-20 bg-[#DBA737] rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-black">
              Vi är experter på solcellsinstallationer & Takbyte för
              olika typer av fastigheter, såsom villor, företag och
              bostadsrättsföreningar. Välj det område som intresserar
              dig och upptäck dess unika fördelar.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="fade-up">
              <Link href="/villa">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    src="/images/content-1.jpg"
                    alt="content"
                    width={200}
                    height={150}
                    className="rounded w-full object-contain mb-6"
                    data-aos="flip-left"
                  />
                  <h3 className="tracking-widest text-[#DBA737] text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Villa
                  </h2>
                  <p className="leading-relaxed text-base line-clamp-3">
                    Optimera er villa med solenergi! Minska kostnader
                    och bli mer hållbara. Kontakta oss nu för
                    skräddarsydda solpanelslösningar.
                  </p>
                </div>
              </Link>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="fade-up">
              <Link href="/företag">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    src="/images/content-3.jpg"
                    alt="content"
                    width={200}
                    height={150}
                    className="rounded w-full object-contain mb-6"
                    data-aos="flip-left"
                  />
                  <h3 className="tracking-widest text-[#DBA737] text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Företag
                  </h2>
                  <p className="leading-relaxed text-base line-clamp-3">
                    Optimera er företag med solenergi! Minska
                    kostnader och bli mer hållbara. Kontakta oss nu
                    för skräddarsydda solpanelslösningar.
                  </p>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="fade-up">
              <Link href="/företag">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    src="/images/takbyte1.jpg"
                    alt="content"
                    width={200}
                    height={150}
                    className="rounded w-full object-contain mb-6"
                    data-aos="flip-left"
                  />
                  <h3 className="tracking-widest text-[#DBA737] text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Takbyte
                  </h2>
                  <p className="leading-relaxed text-base line-clamp-3">
                    Optimera er företag med solenergi! Minska
                    kostnader och bli mer hållbara. Kontakta oss nu
                    för skräddarsydda solpanelslösningar.
                  </p>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="fade-up">
              <Link href="/bostadsrättsföreningar">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    src="/images/content-4.jpg"
                    alt="content"
                    width={200}
                    height={150}
                    className="rounded w-full object-contain mb-6"
                    data-aos="flip-left"
                  />
                  <h3 className="tracking-widest text-[#DBA737] text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Bostadsrättsföreningar
                  </h2>
                  <p className="leading-relaxed text-base line-clamp-3">
                    Optimera er bostadsrättsförening med solenergi!
                    Minska kostnader och bli mer hållbara. Kontakta
                    oss nu för skräddarsydda solpanelslösningar.
                  </p>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="fade-up">
              <Link href="/villa">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    src="/images/content-1.jpg"
                    alt="content"
                    width={200}
                    height={150}
                    className="rounded w-full object-contain mb-6"
                    data-aos="flip-left"
                  />
                  <h3 className="tracking-widest text-[#DBA737] text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Villa
                  </h2>
                  <p className="leading-relaxed text-base line-clamp-3">
                    Optimera er villa med solenergi! Minska kostnader
                    och bli mer hållbara. Kontakta oss nu för
                    skräddarsydda solpanelslösningar.
                  </p>
                </div>
              </Link>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="fade-up">
              <Link href="/företag">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    src="/images/content-3.jpg"
                    alt="content"
                    width={200}
                    height={150}
                    className="rounded w-full object-contain mb-6"
                    data-aos="flip-left"
                  />
                  <h3 className="tracking-widest text-[#DBA737] text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Företag
                  </h2>
                  <p className="leading-relaxed text-base line-clamp-3">
                    Optimera er företag med solenergi! Minska
                    kostnader och bli mer hållbara. Kontakta oss nu
                    för skräddarsydda solpanelslösningar.
                  </p>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="fade-up">
              <Link href="/företag">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    src="/images/takbyte1.jpg"
                    alt="content"
                    width={200}
                    height={150}
                    className="rounded w-full object-contain mb-6"
                    data-aos="flip-left"
                  />
                  <h3 className="tracking-widest text-[#DBA737] text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Takbyte
                  </h2>
                  <p className="leading-relaxed text-base line-clamp-3">
                    Optimera er företag med solenergi! Minska
                    kostnader och bli mer hållbara. Kontakta oss nu
                    för skräddarsydda solpanelslösningar.
                  </p>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="fade-up">
              <Link href="/bostadsrättsföreningar">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Image
                    src="/images/content-4.jpg"
                    alt="content"
                    width={200}
                    height={150}
                    className="rounded w-full object-contain mb-6"
                    data-aos="flip-left"
                  />
                  <h3 className="tracking-widest text-[#DBA737] text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Bostadsrättsföreningar
                  </h2>
                  <p className="leading-relaxed text-base line-clamp-3">
                    Optimera er bostadsrättsförening med solenergi!
                    Minska kostnader och bli mer hållbara. Kontakta
                    oss nu för skräddarsydda solpanelslösningar.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
