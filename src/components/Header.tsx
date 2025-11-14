import React from "react";
import "boxicons/css/boxicons.min.css";

const Header: React.FC = () => {
  //Toggle the mobile menu function
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu?.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu?.classList.add("hidden");
    }
  };
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
        data-aos="flip-up"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
      >
        Sushan.io
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Home
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Feature
        </a>

        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Resources
        </a>

        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          Contact
        </a>
      </nav>

      {/* Sign In Button */}
      <button
        className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        SignIn
      </button>

      {/* Moobile Menu Button - Visible only on Mobile */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu - Hidden by default */}
      <div
        id="mobileMenu"
        className=" hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md "
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            Home
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            Feature
          </a>

          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            Resources
          </a>

          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
