import React from "react";
import "./index.css";

export default function Creatorbodyboxes() {
  const creatorbodyboxes = [
    {
      img: "https://files.hubhopper.com/assets/web/2020-11-02/free.png",
      title: "Starts a Podcast for Free!",
      description:
        "We support our creators and want their voices to be heard which is why we provide free podcast hosting! Create unlimited episodes and host multiple podcasts.",
      linkmoreinfo: "Find out more",
    },
    {
      img: "https://files.hubhopper.com/assets/web/2020-11-02/creation.png",
      title: "Easy Podcast Creation",
      description:
        "We provide our creators with a range of easy-to-use tools (did we mention they're free?) that make their podcast creation process simple & breezy.",
      linkmoreinfo: "Find out more",
    },
    {
      img: "https://files.hubhopper.com/assets/web/2020-11-02/free.png",
      title: "Reach an Indian Audience",
      description:
        "Host your podcast across both Indian and global podcast platforms. We'll help you connect with the right distribution. Let's support the Indian podcasting circle #VocalForLocal!",
      linkmoreinfo: "Find out more",
    },
  ];

  return (
    <div className="creator-body-boxes">
      {creatorbodyboxes.map((creatorbodybox, index) => {
        return (
          <div key={index} className="creator-body-box">
            <img title={creatorbodybox.title} alt={creatorbodybox.title} width="120px" height="120px" src={creatorbodybox.img} />
            <h4>{creatorbodybox.title}</h4>
            <p>{creatorbodybox.description}</p>
            <a href="/">{creatorbodybox.linkmoreinfo}</a>
          </div>
        );
      })}
    </div>
  );
}
