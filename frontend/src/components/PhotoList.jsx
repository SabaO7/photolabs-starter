import React, {useState} from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ likedImages, toggleLike, photos, handlePhotoClick}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        const { id, location, urls, user } = photo;
        return (
          <PhotoListItem 
            key={id}
            id={id}
            city={location.city}
            country={location.country}
            imageSource={urls.regular}
            username={user.username}
            toggleLike={toggleLike}
            isLiked={likedImages ? likedImages.includes(id) : false}
            photo={photo}
            handlePhotoClick={handlePhotoClick}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
