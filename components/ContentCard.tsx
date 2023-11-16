import Image from "next/image";
import Link from "next/link";
/* import Cards from "./Cards"; */

type ContentCardData = {
  ID: number;
  CARDTITLE: string;
  CARDTEXT: string;
  CARDIMAGE: string;
  HREF: string;
  CARDSUBTITLE?: string; // Make CARDSUBTITLE optional
};

const ContentCard = ({ data }: { data: ContentCardData[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {data.map((content) => (
        <div
          key={content.ID}
          className="p-4" /* data-aos="fade-up" */
        >
          <Link href={content.HREF}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-2xl">
              <Image
                src={content.CARDIMAGE}
                alt={content.CARDTITLE}
                width={200}
                height={150}
                className="rounded w-full object-contain mb-6"
                data-aos="flip-left"
              />
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
      {/* <Cards /> */}
    </div>
  );
};

export default ContentCard;
