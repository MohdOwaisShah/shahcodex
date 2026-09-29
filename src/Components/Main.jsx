import React from "react";
import Hero from "./sections/Hero";
import OurServices from "./sections/OurServices";
import OurWork from "./sections/OurWork";
import AboutUs from "./sections/AboutUs";
import Pricing from "./sections/Pricing";
import ContactUs from "./sections/ContactUs";

const Main = () => {
  return (
    <main>
      <Hero />
      <OurServices />
      <OurWork />
      <AboutUs />
      <Pricing />
      <ContactUs />
    </main>
  );
};

export default Main;
