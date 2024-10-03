import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

import { useTranslation } from 'react-i18next';
const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>FASHION ARRIVAL</h2>
        <div>
          <div className="hero-hand-icon">
            <p style={{fontWeight:"bold"}}>{t('heroTitle')}  </p>
            {/* <img src={hand_icon} alt="" /> */}
          </div>
          <p>Your One-Stop </p>
          <p>Online Store!</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
