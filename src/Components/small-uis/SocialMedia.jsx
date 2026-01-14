import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const SocialMedia = ({ textColor }) => {
  return (
    <div className="social-media">
      <a href="https://www.instagram.com/where_is_owais_" target="_blank" >
        <FaInstagramSquare style={{ "color": textColor }} className="social-media-icon" />
      </a>
      {/* <a href="" >
        <FaFacebook style={{ "color": textColor }} className="social-media-icon" />
      </a> */}
    </div>
  );
};

export default SocialMedia;
