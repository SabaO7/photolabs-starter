import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const toggleLike = (isLiked, imageId) => {
    if (isLiked) {
      if (!favorites.includes(imageId)) {
        setFavorites([...favorites, imageId]);
      }
    } else {
      setFavorites(favorites.filter(id => id !== imageId));
    }
  };

  const handlePhotoClick = (photo) => {
    console.log('photo:', photo);
    setIsModalOpen(true);
    setSelectedPhoto(photo);
    if (photo && photo.similar_photos) {
      setSimilarPhotos(Object.values(photo.similar_photos));
    } else {
    }
  };

  const closeTheModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute
        handlePhotoClick={handlePhotoClick}
        setFavorites={setFavorites}
        favorites={favorites}
        toggleLike={toggleLike} 
      />
      {isModalOpen && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          closeModal={closeTheModal}
          similarPhotos={similarPhotos}
          favorites={favorites}
          setFavorites={setFavorites}
          toggleLike={toggleLike}
        />
      )}
    </div>
  );
};

export default App;
