import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div
      className=" text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#76C893]"
    >
      <Header />

      <section id="hero" className="">
        <Hero />
      </section>

      <section id="about" className="">
        <Footer />
      </section>
    </div>
  );
}
