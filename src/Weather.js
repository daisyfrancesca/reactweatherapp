import React from "react";
import "./styles.css";

export default function Weather() {
  return (
    <div className="col-6">
      <ul className="temp">
        <span className="temperature"> 76 </span>
        <span className="unit">
          <sup>
            <a href="#" id="farenheit-link" className="active">
              °F
            </a>{" "}
            |
            <a href="#" id="celsius-link">
              °C{" "}
            </a>
          </sup>
        </span>
        <p className="weather">
          Updated: January 31st
          <br />
          Humidity: 68%
          <br />
          Wind: 18 mph
          <br />
          Clear Sky
        </p>
      </ul>
    </div>
  );
}
