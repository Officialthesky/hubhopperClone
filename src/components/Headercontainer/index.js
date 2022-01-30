import React from "react";
import "./index.css";

export default function Headercontainer() {
  return (
    <div className="header-container">
      <h1>
        Podcasting made <span>simple</span>{" "}
      </h1>
      <p>
        India's largest podcasting platform. Host, Distribute & Discover a new
        podcast, all for free.
      </p>
      <div className="header-container-buttons">
        <button className="creating-button">Start Creating</button>
        <button className="listening-button">Listen Now</button>
      </div>
    </div>
  );
}
