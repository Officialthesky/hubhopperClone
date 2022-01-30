import React from "react";
import "./index.css";

export default function TrendingPodcasts() {
  const trendingPodcasts = [
    {
      img: "https://files.hubhopper.com/banner/podcast/all/jokes-apart.png?t=1643001257",
    },
    {
      img: "https://files.hubhopper.com/banner/podcast/all/tamil-podcast-hey-bruh.png?t=1635227049",
    },
    {
      img: "https://files.hubhopper.com/banner/podcast/all/saras-poetry.png?t=1637647410",
    },
    {
      img: "https://files.hubhopper.com/banner/podcast/all/sadhguru.jpg?t=1640964934",
    },
  ];
  return (
    <div className="trending-podcast">
      {trendingPodcasts.map((podcast, index) => {
        return (
          <div key={index} className="trending-podcast-banner">
            <img alt="hubhopper" width="100%" height="100%" src={podcast.img} />
          </div>
        );
      })}
    </div>
  );
}
