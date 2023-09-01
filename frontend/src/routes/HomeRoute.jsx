import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const HomeRoute = ({ handlePhotoClick, updateToFavPhotoIds, favorites, toggleLike }) => {
  const [likedImages, setLikedImages] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div>
      <TopNavigationBar likesCount={favorites.length} topics={topics} likedImages={favorites} />
      <PhotoList
        photos={photos}
        likedImages={likedImages}
        selectedTopic={selectedTopic}
        handlePhotoClick={handlePhotoClick}
        updateToFavPhotoIds={updateToFavPhotoIds} 
        favorites={favorites}
        toggleLike={toggleLike}
      />    
    </div>
  );
};

export default HomeRoute;
