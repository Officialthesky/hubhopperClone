import React from "react";
import "./index.css";

export default function Downloadappcontainer() {
  return (
    <div className="download-application-container">
      <div className="download-application-header">
        <h1>
          Are you a <span>listener?</span>
        </h1>
        <p>
          Discover more than a million hours of{" "}
          <a href="/">the best podcasts in india </a>on the Hubhopper App
        </p>
      </div>
      <div className="download-application">
        <div className="download-app">
          <img
            alt="hubhopper"
            src="https://files.hubhopper.com/assets/web/2020-11-02/mobile.png"
          />
        </div>
        <div className="download-app-info">
          <ul>
            <li>Make podcast playlists with your favourite episodes</li>
            <li>Listen before bed with the sleep timer</li>
            <li>Listen at your own pace 0.5x, 1x, 2x</li>
          </ul>
          <div className="download-app-img">
            <img
              alt="hubhopper"
              src="https://files.hubhopper.com/assets/web/2020-11-02/appStore.png"
            />
            <img
              alt="hubhopper"
              src="https://files.hubhopper.com/assets/web/2020-11-02/playStore.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
