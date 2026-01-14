import React from "react";
import "../components-styles/SlidingTextTabs.css"; // Import the CSS file

function SlidingTextTabs() {
  const text = [{ word1: "DESIGN." }, { word2: "DELIVER." }]; // Array of colors for stars
  const repeats = 10; // Number of repeats to ensure smooth looping across width

  // Create the repeated items with colored stars
  const items = Array.from({ length: repeats }, (_, i) => (
    <>
      <img src="/Images/star.png" alt="" />
      <div key={i} className="text-item">
        <div className="slider-texts">
          {text.map((words) => {
          return (
            <>
              <span id="design-text">{words.word1}</span>
              <span id="deliver-text">{words.word2}</span>
            </>
          );
        })}                                                                                   
        </div>
      </div>
    </>
  ));

  return (
    <div className="container">
      <div className="slider">
        {items}
        {items} {/* Duplicate for seamless infinite loop */}
      </div>
    </div>
  );
}

export default SlidingTextTabs;
