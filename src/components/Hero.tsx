import React from "react";
import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Hero: React.FC = () => {
  return (
    <main
      className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      {/* left side */}
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        {/* Tag box-with gradient border */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full ">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className="bx bx-diamond"></i>
            INTRODUCING
          </div>
        </div>
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          Sushan
          <br />
          Shrestha
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          Hey, I’m Sushan — a developer who loves building clean, modern
          interfaces and experimenting with cool UI ideas. I spend most of my
          time coding, improving designs, and learning new tools just for fun. I
          enjoy smooth animations, creative projects, and late-night
          problem-solving. If it looks good and works well, I’m happy.
        </p>
        {/* Buttons */}
        <div className="flex gap-4 mt-12">
          <a
            href="#"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] "
          >
            Documentation <i className="bx bx-link-external"></i>
          </a>
          <a
            href="#"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white "
          >
            Get Started <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      {/* Right Side: 3D-Robot  */}
      <Spline
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
        data-aos="flip-left"
        data-aos-duration="3000"
        data-aos-easing="ease-in-out"
        scene={import.meta.env.VITE_SPLINE_SCENE}
      />
    </main>
  );
};

export default Hero;
