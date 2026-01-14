import React, { useState, useEffect } from "react";
import "../components-styles/OurWork.css";
import SectionTitle from "../small-uis/SectionTitle";

const cardData = [
  {
    id: 1,
    image: "/public/Images/our-works/e-commerce.png",
    video: "/public/videos/our-works/light-frame.mp4",
    link: "https://project-in-dev-text.vercel.app/",
    button: (
      <a class="lets-connect-btn" href="">
        View Project
      </a>
    ),
  },
  {
    id: 2,
    image: "/public/Images/our-works/fs-e-commerce.png",
    video: "/public/videos/our-works/fs-e-commerce.mp4",
    link: "https://final-solution-mu.vercel.app/",
    button: (
      <a class="lets-connect-btn" href="https://final-solution-mu.vercel.app/">
        View Project
      </a>
    ),
  },
  {
    id: 3,
    image: "/public/Images/our-works/ziponboarding.png",
    video: "/public/videos/our-works/ziponboarding.mp4",
    link: "https://ziponboarding.in/",
    button: (
      <a class="lets-connect-btn" href="https://ziponboarding.in/">
        View Project
      </a>
    ),
  },
];

export default function OurWork() {
  // hovered holds the ID of the card being hovered (or null if none)
  const [hovered, setHovered] = useState(null);
  // endedStates is an object mapping card IDs to whether that video's ended
  // e.g. { 1: false, 2: true } means card 2's video ended, card 1's not.
  const [endedStates, setEndedStates] = useState({});

  // Detect mobile to autoplay videos without hover
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="our-work-section sections" id="our-work">
      <div className="our-work-container sections-container">
        <SectionTitle
          text={"Our Work"}
          textColor={"var(--light-color)"}
          lineColor={"var(--secondary-color)"}
        />
        <div className="our-work-cards">
          {cardData.map((card) => {
            // Determine if video should show: either on hover or always on mobile
            const showVideo = hovered === card.id || isMobile;
            return (
              <div
                key={card.id}
                className={`our-work-card our-work-card-${card.id}`}
                onMouseEnter={() => {
                  // Start hovering this card: set hovered ID
                  setHovered(card.id);
                  // Reset ended states (or just this card) to false to hide old messages
                  setEndedStates({});
                }}
                onMouseLeave={() => {
                  // Stop hovering: clear hovered
                  setHovered(null);
                  // Optionally clear this card's ended state as well
                  setEndedStates((prev) => {
                    const newStates = { ...prev };
                    delete newStates[card.id];
                    return newStates;
                  });
                }}
              >
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  {showVideo ? (
                    <video
                      src={card.video}
                      className="our-work-video"
                      autoPlay
                      muted
                      // When the video ends, mark this card's ended status true
                      onEnded={() =>
                        setEndedStates((prev) => ({ ...prev, [card.id]: true }))
                      }
                    />
                  ) : (
                    <img
                      src={card.image}
                      alt={`Thumbnail for card ${card.id}`}
                      className="our-work-image"
                    />
                  )}
                </a>
                {/* Show overlay only if this card's video ended AND it's the hovered card */}
                {endedStates[card.id] && hovered === card.id && (
                  <div className="message-overlay">{card.button}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
