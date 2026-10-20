import React from "react";
import "../components-styles/OurWork.css";
import SectionTitle from "../small-uis/SectionTitle";
import projectsData from "../../json-data/our-projects.json";

export default function OurWork() {
  return (
    <section className="our-work-section sections" id="our-work">
      <div className="our-work-container sections-container">
        {/* Heading component */}
        <SectionTitle
          text="Our Work"
          textColor="var(--primary-color)"
          lineColor="var(--light-secondary-blue)"
        />

        {/* 3-column desktop / 2-column tablet / 1-column mobile grid */}
        <div className="our-work-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="our-work-card">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="our-work-card-link"
                aria-label={`View ${project.title} project`}
              >
                <div className="our-work-media-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="our-work-image"
                    loading="lazy"
                  />
                </div>
              </a>

              {/* Title bar (by text, avatar, and badges removed as requested) */}
              <div className="our-work-info-row">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="our-work-project-title"
                >
                  {project.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
