import React, { useEffect, useRef, useState } from "react";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";
import "./Components/components-styles/Universal.css";
import Footer from "./Components/Footer";
import Lenis from "lenis";
import MobileNav from "./Components/MobileNav";

const App = () => {
  const lastScrollY = useRef(0); // Use ref to store previous scroll position
  const [isUp, setIsUp] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setIsUp(true);
        // console.log("Scrolling UP");
      } else if (currentScrollY > lastScrollY.current) {
        // console.log("Scrolling DOWN");
        setIsUp(false);
      }

      if (currentScrollY < 200) {
        setIsUp(false);
      }

      // Update the ref with current position for next comparison
      lastScrollY.current = currentScrollY;

      // console.log("Current scrollY:", currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this runs once on mount

  // lenis
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true, // Simplifies requestAnimationFrame handling
      duration: 1.2, // Controls scroll animation speed
      smoothWheel: true, // Enables smooth mouse wheel scrolling
    });

    return () => {
      lenis.destroy(); // Clean up on component unmount
    };
  }, []);

  return (
    <>
      <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
      <Navigation prop={isUp} setNavOpen={setNavOpen} />
      <Main />
      <Footer />
    </>
  );
};

export default App;
