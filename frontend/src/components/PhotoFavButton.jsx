import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ id, toggleLike, isLiked }) => {

  const handleClick = () => {
    console.log('HandleClick in PhotoFavButton called');

    if (typeof toggleLike === 'function') {
      toggleLike(!isLiked, id);
    } else {
    }
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon selected={isLiked} /> 
      </div>
    </div>
  );
};


export default PhotoFavButton;
