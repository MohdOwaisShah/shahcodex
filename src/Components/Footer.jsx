import React from "react";
import SocialMedia from "../Components/small-uis/SocialMedia";
import Logo from "./small-uis/Logo";
import './components-styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <Logo />
        <div className="footer-nav">
          <a href="#service">Service</a>
          <a href="#our-work">Our Work</a>
          <a href="#about-us">About Us</a>
          <a href="#contact-us">Contact Us</a>
        </div>
        <SocialMedia textColor={"var(--secondary-color)"} />
      </div>
      <span className="footer-copy-right">ShahCodeX - 2025 All right reserve</span>
    </footer>
  );
};

export default Footer;
