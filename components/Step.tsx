import React from "react";

const Step = () => {
  const statesData = [
    { state: "Peak", value: 4 },
    { state: "Demolition", value: 3 },
    { state: "Inspiration", value: 2 },
    { state: "Shame", value: 1 },
    { state: "Action", value: 4 },
    { state: "Fear", value: 3 },
    { state: "Motivation", value: 2 },
    { state: "Obligation", value: 1 },
    { state: "Acceptance", value: 4 },
    { state: "Shock/Confusion", value: 3 },
    { state: "Contact", value: 2 },
    { state: "Conflict", value: 1 },
    { state: "Love", value: 4 },
    { state: "Destruction", value: 3 },
    { state: "Hope/Faith", value: 2 },
    { state: "Zero", value: 1 },
  ];

  return (
    <div className="flex flex-wrap w-full">
      <div
        className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6"
        data-aos="fade-up"
      >
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DBA737] inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4" data-aos="zoom-in-right">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Hitta din lösning
            </h2>
            <p className="leading-relaxed">
              Använd vår solcellskalkylator för att se ditt
              potentiella sparande eller fyll i formuläret för att
              kontakta våra experter.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DBA737] inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4" data-aos="zoom-in-right">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Personlig rådgivning
            </h2>
            <p className="leading-relaxed">
              Fyll i ett intresseformulär så ringer vi upp dig och
              bokar in ett möte.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DBA737] inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4" data-aos="zoom-in-right">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Smidig installation
            </h2>
            <p className="leading-relaxed">
              Vi monterar, besiktigar och lämnar sedan över
              anläggningen till dig.
            </p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DBA737] inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4" data-aos="zoom-in-right">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              Slutligen
            </h2>
            <p className="leading-relaxed">
              Vår support finns här för dig under hela anläggningens
              livstid
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
