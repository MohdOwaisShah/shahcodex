import React from "react";

/**
 * SEO Schema Component
 * Adds structured data (JSON-LD) to help search engines understand the website content
 * This enables rich results in search engines like Google
 */
const SeoSchema = () => {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shah Codex",
    url: "https://shahcodex.in",
    logo: "https://shahcodex.in/Images/logo.jpg",
    description:
      "Expert web development services including custom websites, e-commerce solutions, and full-stack development using modern technologies.",
    sameAs: [
      // Add your social media profiles here when available
      // "https://www.facebook.com/shahcodex",
      // "https://www.twitter.com/shahcodex",
      // "https://www.linkedin.com/company/shahcodex",
      // "https://www.instagram.com/shahcodex"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English"],
    },
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shah Codex",
    url: "https://shahcodex.in",
    description: "Professional Web Development & Design Services",
    publisher: {
      "@type": "Organization",
      name: "Shah Codex",
    },
  };

  // LocalBusiness Schema (Professional Service)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Shah Codex",
    image: "https://shahcodex.in/Images/logo.jpg",
    url: "https://shahcodex.in",
    description:
      "Shah Codex offers expert web development services including custom website development, e-commerce solutions, responsive design, and full-stack development using React, Next.js, Node.js, and modern technologies.",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development Services",
    provider: {
      "@type": "Organization",
      name: "Shah Codex",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Responsive Web Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Development",
          },
        },
      ],
    },
  };

  React.useEffect(() => {
    // Create and append script tags for each schema
    const schemas = [
      organizationSchema,
      websiteSchema,
      localBusinessSchema,
      serviceSchema,
    ];
    const scriptElements = [];

    schemas.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      script.id = `seo-schema-${index}`;
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    // Cleanup function to remove scripts when component unmounts
    return () => {
      scriptElements.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default SeoSchema;
