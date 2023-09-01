import React from 'react';
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import topics from "../mocks/topics";  // Update this path based on your actual file structure

const PhotoListItem = (props) => {
  const { id, city, country, username, imageSource, profile, toggleLike, favorites, handlePhotoClick, photo } = props;

  // Directly check if the photo is liked based on the favorites array
  const isLiked = favorites.includes(id);

  // When the favorite button is clicked
  const handleFavClick = (event) => {
    event.stopPropagation(); 
    toggleLike(!isLiked, id);
  };

  // When the photo itself is clicked
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
          <p className="photo-list__categories">{topics.titles} </p>  {/* Note: topics.titles will only work if titles is an array, make sure it exists */}
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
