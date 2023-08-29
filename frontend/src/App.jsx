import React, { useState } from 'react';
import './App.scss';
import PhotoList from './components/PhotoList';

const App = () => {
  const [likedImages, setLikedImages] = useState([]);

  const toggleLike = (isLiked, imageId) => {
    if (isLiked) {
      setLikedImages([...likedImages, imageId]);
    } else {
      setLikedImages(likedImages.filter(id => id !== imageId));
    }
  };

  return (
    <div className="App">
      <PhotoList likedImages={likedImages} toggleLike={toggleLike} />
    </div>
  );
};

export default App;
