import React from 'react';
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import topics from "../mocks/topics"; 

const PhotoListItem = (props) => {
  const { id, city, country, username, imageSource, profile, toggleLike, favorites, handlePhotoClick, photo } = props;

  const isLiked = favorites.includes(id);

  const handleFavClick = (event) => {
    event.stopPropagation(); 
    toggleLike(!isLiked, id);
  };

  const handleClick = () => {
    if (handlePhotoClick) {
      handlePhotoClick(photo);
    }
  };

  return (
    <li className="photo-list__item">
      <div onClick={handleFavClick}>
        <PhotoFavButton 
          id={id}
          toggleLike={toggleLike}
          isLiked={isLiked}
        />
      </div>
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
            {`${city}, ${country}`}
          </p>
          <p className="photo-list__categories">{topics.titles} </p> 
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
