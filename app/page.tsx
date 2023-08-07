"use client";
import Form from "@/components/contactForm/Form";
import Content from "@/components/Content";
import Hero from "@/components/Hero";
import Step from "@/components/Step";
import Testimonials from "@/components/Testimonial";
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
      <Content />
      <Step />
      {/*       <Testimonials /> */}
      <Form />
    </main>
  );
};
export default HomePage;
