import React from "react";
import PodcastLogos from "../PodcastLogos";
import TrendingPodcasts from "../TrendingPodcasts";
import "./index.css";

export default function Podcastcontainer() {
  return (
    <div className="podcast-container">
      <TrendingPodcasts/>
      <PodcastLogos />
    </div>
  );
}
