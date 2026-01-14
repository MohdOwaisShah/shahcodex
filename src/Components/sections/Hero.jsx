import React from "react";
import "../components-styles/Hero.css";
import ConnectBtn from "../small-uis/ConnectBtn";
import SlidingTextTabs from "../small-uis/SlidingTextTabs";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        {/* hero-section-first */}
        <div className="hero-section-first">
          <div className="hero-section-first-texts">
            <h2 id="hero-section-heading1">
              Your Vision, Our <span className="accent-color">Code</span>
            </h2>
            <h2 id="hero-section-heading2">
              Build a Website That Builds Your Business
            </h2>
            <p>
              We transform ideas into high-speed, stunning websites for your
              growth.
            </p>
            {/* hero-section-btns */}
            <div className="hero-section-btns">
              <a href="#our-work" id="hero-section-btns-our_work">
                Our Work
              </a>
              <ConnectBtn text={"let's connect"} />
            </div>
          </div>
        </div>

        {/* hero-section-second */}
        <img
          src="/Images/hero-sec-img.jpg"
          id="hero-section-second-img"
          alt=""
        />

        <SlidingTextTabs />
      </section>
    </>
  );
};

export default Hero;
