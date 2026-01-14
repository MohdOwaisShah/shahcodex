import React from "react";
import "../Components/components-styles/MobileNav.css";
import { IoIosClose } from "react-icons/io";

const MobileNav = ({ navOpen, setNavOpen }) => {
  return (
    <div className={`mobile-nav-container ${navOpen ? "slide-in" : ""}`}>
      <div
        className="mobile-nav-black-bg"
        onClick={() => setNavOpen(false)}
      ></div>
      <div className="mobile-nav">
        <IoIosClose onClick={() => setNavOpen(false)} />
        <div className="mobile-nav-and-btn">
          <div className="mobile-nav-txt">
            <a href="#service" onClick={() => setNavOpen(false)}>
              Service
            </a>
            <a href="#our-work" onClick={() => setNavOpen(false)}>
              Our Work
            </a>
            <a href="#about-us" onClick={() => setNavOpen(false)}>
              About Us
            </a>
            <a href="#contact-us" onClick={() => setNavOpen(false)}>
              Contact Us
            </a>
          </div>
          <a
            href="#our-work"
            className="our-work-btn"
            onClick={() => setNavOpen(false)}
          >
            Our Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
