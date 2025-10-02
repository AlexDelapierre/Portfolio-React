import React from "react";
import "./ScrollArrow.css";
import { FiChevronDown } from "react-icons/fi";

const ScrollArrow = () => {
  return (
    <div className="scroll-arrow">
      <FiChevronDown className="arrow-icon" />
    </div>

    // Mouse scroll indicator 
    /* <div className="home-hero__mouse-scroll-cont">
      <div className="mouse"></div>
    </div> */
  );
};

export default ScrollArrow;
