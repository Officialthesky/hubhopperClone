import React from "react";
import "./index.css";

export default function PodcastLogos() {
  const podcastLogos = [
    {
      img: "https://files.hubhopper.com/podcast/10001/1947395-1563950483487-047cd3a392cdd.jpg?v=1591211511&s=hh-web-app",
    },
    {
      img: "https://files.hubhopper.com/podcast/9322/sukhan-by-vrinda-vaid.jpg?v=1633002158&s=hh-web-app",
    },
    {
      img: "https://files.hubhopper.com/podcast/311415/kuch-humari-baatein.jpg?v=1588090257&s=hh-web-app",
    },
    {
      img: "https://files.hubhopper.com/podcast/340145/the-ranveer-show.jpg?s=hh-web-app",
    },
    {
      img: "https://files.hubhopper.com/podcast/340146/deep-dive-with-ali-abdaal.jpg?s=hh-web-app",
    },
    {
      img: "https://files.hubhopper.com/podcast/10001/1947395-1563950483487-047cd3a392cdd.jpg?v=1591211511&s=hh-web-app",
    },
  ];
  return (
    <div className="podcast-logos">
      {podcastLogos.map((podcastlogo, index) => {
        return (
          <div key={index} className="podcast-logo">
            <img alt="hubhopper podcast" width="100%" height="100%" src={podcastlogo.img} />
          </div>
        );
      })}
    </div>
  );
}
