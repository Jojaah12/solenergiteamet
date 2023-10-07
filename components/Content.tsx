import { CONTENTCARDDATA, CONTENTBANNERDATA } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import InfoBanner from "./InfoBanner";

const Content = () => {
  return (
    <>
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <InfoBanner
            heading={CONTENTBANNERDATA.HEADING}
            subHeading={CONTENTBANNERDATA.SUBHEADING}
          />
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
