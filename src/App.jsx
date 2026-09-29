import React, { useEffect, useRef, useState } from "react";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";
import "./Components/components-styles/Universal.css";
import Footer from "./Components/Footer";
import Lenis from "lenis";
import MobileNav from "./Components/MobileNav";
import { Analytics } from "@vercel/analytics/react";
import SeoSchema from "./Components/small-uis/SeoSchema";
const App = () => {
  const [isUp, setIsUp] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  // Lenis smooth scroll and navigation scroll detection
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true, // Simplifies requestAnimationFrame handling
      duration: 1.2, // Controls scroll animation speed
      smoothWheel: true, // Enables smooth mouse wheel scrolling
    });

    const handleScroll = (e) => {
      const currentScrollY = e.scroll ?? window.scrollY;

      if (currentScrollY < 200) {
        setIsUp(false);
      } else if (e.direction === -1) {
        // Scrolling UP
        setIsUp(true);
      } else if (e.direction === 1) {
        // Scrolling DOWN
        setIsUp(false);
      }
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.destroy(); // Clean up on component unmount
    };
  }, []);

  return (
    <>
      <Analytics />
      <SeoSchema />
      <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
      <Navigation prop={isUp} setNavOpen={setNavOpen} />
      <Main />
      <Footer />
    </>
  );
};

export default App;
