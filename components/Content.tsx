import { CONTENTCARDDATA, CONTENTDATA } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <>
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20" data-aos="fade-up">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
                {CONTENTDATA.HEADING}
              </h1>
              <div className="h-1 w-20 bg-[#DBA737] rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-black">
              {CONTENTDATA.SUBHEADING}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {CONTENTCARDDATA.map((content) => (
              <div
                key={content.ID}
                className="xl:w-1/4 md:w-1/2 p-4"
                data-aos="fade-up"
              >
                <Link href={content.HREF}>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <Image
                      src={content.CARDIMAGE}
                      alt={content.CARDTITLE}
                      width={200}
                      height={150}
                      className="rounded w-full object-contain mb-6"
                      data-aos="flip-left"
                    />
                    <h3 className="tracking-widest text-[#DBA737] text-xs font-medium title-font">
                      {content.CARDSUBTITLE}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {content.CARDTITLE}
                    </h2>
                    <p className="leading-relaxed text-base line-clamp-3">
                      {content.CARDTEXT}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
