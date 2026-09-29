import React, { useState, useRef } from "react";
import SectionTitle from "../small-uis/SectionTitle";
import "../components-styles/Pricing.css";
import pricingData from "../../json-data/pricing.json";
import {
  FaWhatsapp,
  FaCheck,
  FaXmark,
  FaShopify,
  FaClock,
  FaCircleInfo,
  FaRocket,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaArrowRight,
  FaBolt,
} from "react-icons/fa6";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "onetime"
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const gridRef = useRef(null);

  const { sectionHeader, billingOptions, plans, addons, importantNotes, contact } = pricingData;

  const getWhatsAppUrl = (customText) => {
    const defaultMsg = "Hi Shahcodex, I am interested in your website development services. Please share more details.";
    const text = customText || defaultMsg;
    return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleGridScroll = () => {
    if (!gridRef.current) return;
    const container = gridRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.scrollWidth / plans.length;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveCardIndex(Math.min(Math.max(index, 0), plans.length - 1));
  };

  const scrollToCard = (index) => {
    if (!gridRef.current) return;
    const container = gridRef.current;
    const cards = container.querySelectorAll(".pricing-card");
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActiveCardIndex(index);
    }
  };

  return (
    <section className="pricing-section sections" id="pricing">
      <div className="pricing-container sections-container">
        {/* Section Header */}
        <div className="pricing-header-container">
          <SectionTitle
            text={sectionHeader.title}
            textColor="var(--primary-color)"
            lineColor="var(--light-secondary-blue)"
          />
          <p className="pricing-tagline">{sectionHeader.tagline}</p>
          <p className="pricing-subtitle">{sectionHeader.subtitle}</p>
        </div>

        {/* Billing Segmented Toggle Bar */}
        <div className="pricing-toggle-wrapper">
          <div className="pricing-toggle-container">
            {billingOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`pricing-toggle-btn ${billingCycle === opt.id ? "active" : ""}`}
                onClick={() => setBillingCycle(opt.id)}
              >
                <span>{opt.label}</span>
                {opt.badge && <span className="toggle-mini-badge">{opt.badge}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid" ref={gridRef} onScroll={handleGridScroll}>
          {plans.map((plan) => {
            const currentPricing = plan.pricing[billingCycle] || plan.pricing.monthly;
            const isFeatured = plan.isFeatured;

            return (
              <div
                className={`pricing-card ${isFeatured ? "featured" : ""}`}
                key={plan.id}
              >
                {/* Top Badge for Featured Plan */}
                {plan.badge && (
                  <div className="card-top-badge-container">
                    <span className="plan-top-badge">
                      {isFeatured && <FaBolt size={11} />} {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Header & Price */}
                <div className="plan-header">
                  <div className="plan-title-wrapper">
                    <h3 className="plan-name">{plan.name}</h3>
                    {plan.platformTag && (
                      <span className="platform-tag">
                        <FaShopify /> {plan.platformTag}
                      </span>
                    )}
                  </div>
                  <div className="price-main">
                    <span className="price-currency">{currentPricing.price}</span>
                    <span className="price-period">{currentPricing.period}</span>
                  </div>
                  <p className="plan-tagline">{plan.tagline}</p>
                </div>

                {/* Setup Fee & Domain Info Box */}
                <div className="plan-setup-box">
                  <div className="price-setup-row">
                    <span className="setup-fee">{currentPricing.setupFee}</span>
                    {currentPricing.offerTag && (
                      <span className="offer-tag">{currentPricing.offerTag}</span>
                    )}
                  </div>
                  {currentPricing.setupDetails && (
                    <p className="setup-details">{currentPricing.setupDetails}</p>
                  )}
                </div>

                {/* Primary Action Button (Right below price, matching reference UI) */}
                <a
                  href={getWhatsAppUrl(plan.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`plan-cta-btn ${isFeatured ? "featured-btn" : "secondary-btn"}`}
                >
                  <FaWhatsapp size={18} />
                  <span>Choose {plan.shortTitle || plan.name}</span>
                </a>

                {/* Features List */}
                <div className="plan-features-section">
                  <ul className="plan-features-list">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="plan-feature-item">
                        <span className="check-icon-wrapper">
                          <FaCheck className="plan-feature-icon" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Shopify Extra: Management Included */}
                  {plan.managementIncludes && (
                    <div className="shopify-subblock">
                      <h4 className="shopify-subblock-title management">
                        <FaCheck size={12} /> Monthly Management Includes:
                      </h4>
                      <ul className="plan-features-list">
                        {plan.managementIncludes.map((item, idx) => (
                          <li key={idx} className="plan-feature-item">
                            <span className="check-icon-wrapper">
                              <FaCheck className="plan-feature-icon" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Shopify Extra: Not Included */}
                  {plan.notIncluded && (
                    <div className="shopify-subblock">
                      <h4 className="shopify-subblock-title not-included">
                        <FaXmark size={12} /> Not Included:
                      </h4>
                      <ul className="plan-features-list">
                        {plan.notIncluded.map((item, idx) => (
                          <li key={idx} className="plan-feature-item">
                            <span className="cross-icon-wrapper">
                              <FaXmark className="plan-feature-icon cross" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Renewal Notice Footer */}
                {plan.renewalNotice && (
                  <div className="plan-renewal-notice">
                    <FaClock size={12} />
                    <span>{plan.renewalNotice}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Indicator Dots */}
        <div className="pricing-mobile-dots">
          {plans.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`pricing-dot ${activeCardIndex === idx ? "active" : ""}`}
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to plan ${idx + 1}`}
            />
          ))}
        </div>

        {/* Add-ons Section */}
        {addons && addons.length > 0 && (
          <div className="pricing-addons-section">
            <div className="addons-header">
              <h3 className="addons-title">
                <FaRocket /> Add-ons (Optional Services)
              </h3>
              <p className="addons-subtitle">
                Enhance your store with extra features and customized capabilities.
              </p>
            </div>
            <div className="addons-grid">
              {addons.map((addon, index) => (
                <div className="addon-card" key={index}>
                  <div className="addon-top">
                    <h5 className="addon-name">{addon.title}</h5>
                    <p className="addon-desc">{addon.desc}</p>
                  </div>
                  <div className="addon-price">{addon.price}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Section: Important Notes & WhatsApp CTA Banner */}
        <div className="pricing-bottom-grid">
          <div className="important-notes-box">
            <h4 className="important-notes-title">
              <FaCircleInfo /> Important Notes
            </h4>
            <ul className="important-notes-list">
              {importantNotes.map((note, idx) => (
                <li key={idx}>
                  <FaCheck size={12} />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pricing-cta-card">
            <div className="cta-header">
              <h3 className="cta-title">
                <FaRocket /> Let's Get Started!
              </h3>
              <p className="cta-desc">
                Choose the plan that fits your business and take the first step towards online growth.
              </p>
            </div>

            <a
              href={getWhatsAppUrl("Hi Shahcodex, I'd like to get started with building my online store.")}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp-btn"
            >
              <FaWhatsapp size={20} />
              <span>Chat on WhatsApp</span>
              <FaArrowRight size={14} />
            </a>

            <div className="cta-contact-details">
              <div className="cta-contact-row">
                <FaPhone size={12} />
                <a href={`tel:${contact.whatsappNumber}`}>{contact.displayPhone}</a>
              </div>
              <div className="cta-contact-row">
                <FaEnvelope size={12} />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="cta-contact-row">
                <FaGlobe size={12} />
                <span>{contact.website}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
