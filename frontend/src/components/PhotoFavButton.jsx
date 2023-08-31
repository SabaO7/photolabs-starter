import React, { useState, useEffect } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = (props) => {
  const { id, toggleLike, isLiked } = props;  // changed isFav to toggleLike

  const handleClick = () => {
    toggleLike(!isLiked, id);  // calling toggleLike instead of isFav
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
