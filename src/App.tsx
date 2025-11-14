import React, { useEffect } from "react";
import gradient from "../public/gradient.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero2 from "./components/Hero2";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  });
  return (
    <main>
      {/* Gradient image */}
      <img
        src={gradient}
        alt="Gradient-img"
        className="absolute top-0 right-0 opacity-60 -z-1"
      />
      {/* Blur Effect */}
      <div
        className="
          h-0 w-160
          absolute top-[20%] right-[-5%]
          shadow-[0_0_2000px_20px_#e99b63]
          -rotate-30
          -z-10
        "
      ></div>
      <Header />
      <Hero />
      <Hero2 />
    </main>
  );
};

export default App;
