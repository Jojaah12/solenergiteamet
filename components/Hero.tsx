const Hero = () => {
  return (
    <div className="h-[40vh] sm:h-[60vh] md:h-[65vh] flex overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-90"
      >
        <source src="/images/intro4.mp4" type="video/mp4" />
      </video>
      <div className="container mx-auto flex px-5 py-12 md:py-16 lg:py-20 md:flex-row flex-col items-center h-full">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start 
          md:text-left mb-8 md:mb-0 items-center text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Solceller & Takbyte
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
