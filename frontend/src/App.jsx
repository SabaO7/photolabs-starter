import React, { useState } from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList';
import PhotoFavButton from './components/PhotoFavButton';

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
      <PhotoList />
      {/* <PhotoListItem />
      <PhotoFavButton
        favImagesArr={likedImages}
        isFav={toggleLike}
        id="1" 
      /> */}
    </div>
  );
};

export default App;
