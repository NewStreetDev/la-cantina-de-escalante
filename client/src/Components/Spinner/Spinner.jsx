import "../../index.css";
import React from "react"

export default function Spinner() {
  return (
    <div className="spiner-center">
      <div className="spinner spiner-hue-rotate">
        <div className="spiner-bounce1"></div>
        <div className="spiner-bounce2"></div>
        <div className="spiner-bounce3"></div>
      </div>
    </div>
  );
}
