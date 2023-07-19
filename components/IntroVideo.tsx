import React from "react";

const IntroVideo = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        className="relative flex justify-center items-center"
      >
        <source src="/images/intro1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default IntroVideo;
