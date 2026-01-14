import React from "react";
import "../components-styles/AboutUs.css";
import SectionTitle from "../small-uis/SectionTitle";
import ConnectBtn from "../small-uis/ConnectBtn";
import LogoSlider from "../small-uis/LogoSlider";

const AboutUs = () => {
  return (
    <>
      <section className="about-us-section sections" id="about-us">
        <div className="about-us-container sections-container">
          <SectionTitle
            text="About Us"
            textColor="var(--primary-color)"
            lineColor="var(--light-secondary-blue)"
          />
          {/* about-us-img-and-texts */}
          <div className="about-us-img-and-texts">
            <div className="about-us-img">
              <img src="/Images/about-us.png" alt="" />
            </div>
            <div className="about-us-texts">
              <h3 className="about-us-texts-heading">
                Your Partners In <span className="accent-color">Web</span>
                <span className="sky-blue-color"> Development</span>
              </h3>
              <p>
                At ShahCodeX, we turn ideas into powerful digital experiences.
                Specializing in custom web development, we build fast,
                responsive, and scalable websites tailored to your unique
                business goals.
              </p>
              <p>
                Our team blends technical expertise with creative vision to
                deliver solutions that not only look stunning but also drive
                growth, engagement, and results. From sleek portfolios to robust
                e-commerce platforms, we’re here to bring your vision to life.
              </p>
              <p>Let’s build something amazing together.</p>
              <div className="about-us-connect-btn">
                <ConnectBtn text="Let's Connect" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <LogoSlider />
    </>
  );
};

export default AboutUs;
