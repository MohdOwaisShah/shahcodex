import React, { useEffect, useState } from "react";
import "./components-styles/Navigation.css";
import ConnectBtn from "./small-uis/ConnectBtn";
import Logo from "./small-uis/Logo";
// hemburger icon
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navigation = ({ prop, setNavOpen }) => {
  // lazy initializer: safe if window unavailable during SSR
  const [isMenuNav, setIsMenuNav] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  console.log("fixed", prop);

  useEffect(() => {
    // guard in case of SSR
    if (typeof window === "undefined") return;

    // debug safely on client only
    // console.log("window.innerWidth:", window.innerWidth);

    const handleResize = () => {
      setIsMenuNav(window.innerWidth <= 768);
    };

    // set initial value (in case state init was different)
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // run once on client mount

  console.log("isMenuNav", isMenuNav);

  return (
    <nav id="home">
      <div className={`navigation-container ${prop ? "fixed-nav" : ""}`}>
        <Logo />
        <div className="nav-text hide-desk-nav">
          <a href="#service">Service</a>
          <a href="#our-work">Our Work</a>
          <a href="#about-us">About Us</a>
          <a href="#contact-us">Contact Us</a>
        </div>
        <div className="lets-connect-btn-container">
          <ConnectBtn text={"let's connect"} />
          <HiOutlineMenuAlt3
            className="hemburger-icon"
            onClick={() => setNavOpen(true)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
