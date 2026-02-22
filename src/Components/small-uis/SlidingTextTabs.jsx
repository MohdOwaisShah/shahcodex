import React from "react";
import "../components-styles/SlidingTextTabs.css"; // Import the CSS file

function SlidingTextTabs() {
  const repeats = 10; // Number of repeats to ensure smooth looping across width

  // Create the repeated items with colored stars
  const items = Array.from({ length: repeats }, (_, i) => (
    <React.Fragment key={i}>
      <img src="/Images/star.png" alt="star icon" />
      <div className="text-item">
        <div className="slider-texts">
          <span className="design-text">DESIGN.</span>
          <span className="deliver-text">DELIVER.</span>
        </div>
      </div>
    </React.Fragment>
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
