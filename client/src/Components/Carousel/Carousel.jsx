import React from "react";
import AliceCarousel from "react-alice-carousel";

import "../../index.css";
import "react-alice-carousel/lib/alice-carousel.css";
import burgers from "../../Images/burgers.jpg"
import ceviche from "../../Images/ceviche.jpg"
import cheers from "../../Images/cheers.jpg"
import chifrijos from "../../Images/chifrijos.jpg"
import margarona from "../../Images/margarona.jpg"

const responsive = {
  0: { items: 1 },
  500: { items: 2 },
  700: { items: 3},
  1100: { items: 4 },

};

const items = [
  <div className="item" data-value="1">
      <img src={burgers} alt="burgers"/>
  </div>,
  <div className="item" data-value="2">
      <img src={ceviche} alt="ceviche"/>
  </div>,
  <div className="item" data-value="3">
      <img src={cheers} alt="cheers"/>
  </div>,
  <div className="item" data-value="4">
      <img src={chifrijos} alt="chifrijos"/>
  </div>,
  <div className="item" data-value="5">
      <img src={margarona} alt="margarona"/>
  </div>,
];

export default function Carousel() {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      infinite
      autoPlay
      animationDuration={3000}
    />
  );
}
