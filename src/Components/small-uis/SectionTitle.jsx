// SectionTitle.jsx
import React from 'react';

const SectionTitle = ({ text, textColor, lineColor }) => {
  return (
    <h2 className="section-title" style={{ '--text-color': textColor, '--line-color': lineColor }}>
      {text}
    </h2>
  );
};

export default SectionTitle;
