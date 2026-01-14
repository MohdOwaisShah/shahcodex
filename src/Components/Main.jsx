import React from "react";
import Hero from "./sections/Hero";
import OurServices from "./sections/OurServices";
import OurWork from "./sections/OurWork";
import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";

const Main = () => {
  return (
    <main>
      <Hero />
      <OurServices />
      <OurWork />
      <AboutUs />
      <ContactUs />
    </main>
  );
};

export default Main;
