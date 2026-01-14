import React from "react";
import SectionTitle from "../small-uis/SectionTitle";
import "../components-styles/OurServices.css";
import ourServices from "../../json-data/our-services.json";

const OurServices = () => {
  return (
    <section className="our-services-section sections" id="service">
      <div className="our-services-container sections-container">
        <SectionTitle
          text="Our Services"
          textColor="var(--primary-color)"
          lineColor="var(--light-secondary-blue)"
        />
        {/* our-services-cards-container */}
        <div className="our-services-cards-container">
          {ourServices.map((service) => {
            return (
              <div
                className={`our-services-card${service.cardClass}`}
                key={service.id}
              >
                {/* our-services-card-heading */}
                <div className="our-services-card-heading">
                  <div className="our-services-card-headings">
                    <h4 className="card-heading-1">{service.cardHeading1}</h4>
                    <h4 className="card-heading-2">{service.cardHeading2}</h4>
                  </div>
                  <img src={service.cardImg} alt={service.cardHeading1} className={service.cardImgClas} />
                </div>
                {/* our-services-card-description */}
                <p className={`our-services-card-description${service.cardClass}`}>
                  {service.cardPara}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
