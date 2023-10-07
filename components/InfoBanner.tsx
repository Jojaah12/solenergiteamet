import React from "react";

const InfoBanner = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="flex flex-wrap w-full mb-20" data-aos="fade-up">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
          {heading}
        </h1>
        <div className="h-1 w-20 bg-[#DBA737] rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-black">{subHeading}</p>
    </div>
  );
};

export default InfoBanner;
