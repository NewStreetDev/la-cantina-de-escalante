import React from "react";
import AliceCarousel from "react-alice-carousel";

import "../../index.css";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  500: { items: 2 },
  700: { items: 3},
  1100: { items: 4 },

};

const items = [
  <div className="item" data-value="1">
      <img src="https://images.pexels.com/photos/2663974/pexels-photo-2663974.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
  </div>,
  <div className="item" data-value="2">
      <img src="https://images.pexels.com/photos/5947110/pexels-photo-5947110.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
  </div>,
  <div className="item" data-value="3">
      <img src="https://images.pexels.com/photos/9149121/pexels-photo-9149121.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
  </div>,
  <div className="item" data-value="4">
      <img src="https://images.pexels.com/photos/9882302/pexels-photo-9882302.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
  </div>,
  <div className="item" data-value="5">
      <img src="https://images.pexels.com/photos/11430606/pexels-photo-11430606.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
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
      disableButtonsControls
    />
  );
}
