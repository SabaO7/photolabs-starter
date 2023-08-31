import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import topics from "mocks/topics";

const PhotoListItem = (props) => {
  const { id, city, country, username, imageSource, profile, pictureClick, toggleLike, isLiked } = props;

  const handleFavClick = () => {
    toggleLike(!isLiked, id);
  };

  const handleClick = () => {
    if (props.handlePhotoClick) {
      props.handlePhotoClick(props.photo);
    }
  };
  

  return (
    <li className="photo-list__item">
      <PhotoFavButton 
          id={id} 
          toggleLike={toggleLike}
          isLiked={isLiked} 
        />
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
          <p className="photo-list__categories">{topics.titles} </p>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
