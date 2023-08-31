import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import photos from '../mocks/photos';
import topics from '../mocks/topics';


const HomeRoute = ({ handlePhotoClick }) => {
  const [likedImages, setLikedImages] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const toggleLike = (isLiked, imageId) => {
    if (isLiked) {
      setLikedImages([...likedImages, imageId]);
    } else {
      setLikedImages(likedImages.filter(id => id !== imageId));
    }
    console.log('HomeRoute -> likedImages:', likedImages);
  };

  return (
    <div>
      <TopNavigationBar likesCount={likedImages.length} topics={topics} likedImages={likedImages}/>
      <PhotoList photos={photos} likedImages={likedImages} toggleLike={toggleLike} selectedTopic={selectedTopic} handlePhotoClick={handlePhotoClick} />
    </div>
  );
};

export default HomeRoute;
