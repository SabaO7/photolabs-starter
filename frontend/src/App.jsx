// App.jsx
import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { isModalOpen, selectedPhoto, similarPhotos, favorites } = state;

  return (
    <div className="App">
      <HomeRoute
        handlePhotoClick={setPhotoSelected}
        setFavorites={updateToFavPhotoIds} // Ensure to adjust this in HomeRoute as well
        favorites={favorites}
        toggleLike={updateToFavPhotoIds}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          closeModal={onClosePhotoDetailsModal}
          similarPhotos={similarPhotos}
          favorites={favorites}
          setFavorites={updateToFavPhotoIds}
          toggleLike={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
