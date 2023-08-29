import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, city, country, username, imageSource, profile, pictureClick } = props;

  const handleClick = () => {
    if(pictureClick) {
      pictureClick(id);
    }
  };

  return (
    <li className="photo-list__item">
      <PhotoFavButton />
      <img
        className="photo-list__image"
        src={imageSource}
        alt="" 
        onClick={handleClick}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={"profile img for " + username}
        />
        <div>
          <p className="photo-list__user-info">{username}</p>
          <p className="photo-list__user-info photo-list__user-location">
            {city + ", "} {country}
          </p>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
