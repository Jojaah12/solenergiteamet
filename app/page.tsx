"use client";

import ContentCard from "@/components/ContentCard";
import Hero from "@/components/Hero";
import InfoBanner from "@/components/InfoBanner";
import Step from "@/components/Step";

import {
  CONTENTBANNERDATA,
  CONTENTCARDDATA,
  STEPBANNERDATA,
} from "@/constants/constants";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main>
      <Hero />
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <ContentCard data={CONTENTCARDDATA} />
        </div>
      </section>
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <InfoBanner
            heading={STEPBANNERDATA.HEADING}
            subHeading={STEPBANNERDATA.SUBHEADING}
          />

          <Step />
        </div>
      </section>
      {/*       <Testimonials /> */}
    </main>
  );
};
export default HomePage;
