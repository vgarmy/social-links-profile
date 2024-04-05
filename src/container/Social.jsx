import React from "react";
import "./social.css";
import data from "./data";
import avatarJessica from "../assets/images/avatar-jessica.jpeg";

function Social() {
  return (
    <div className="card__container">
      <div className="card__container_user">
        <div className="card__container_user_avatar">
          <img src={avatarJessica} alt="avatarJessica" />
        </div>
        <div className="card__container_user_name">
          <h1>Jessica Randall</h1>
        </div>
        <div className="card__container_user_city">
          <h2>London, United Kingdom</h2>
        </div>
        <div className="card__container_user_quote">
          <p>"Front-end developer and avid reader."</p>
        </div>
      </div>
      <div className="card__container_social">
        {data.map((item, index) => (
          <div className="card__container_social_item" key={index}>
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.socailChannel}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Social;
