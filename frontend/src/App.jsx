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
    fetchPhotosByTopic,
  } = useApplicationData();

  const { isModalOpen, selectedPhoto, similarPhotos, favorites, photoData, topicData } = state;

  return (
    <div className="App">
      <HomeRoute
        handlePhotoClick={setPhotoSelected}
        setFavorites={updateToFavPhotoIds}
        fetchPhotosByTopic={fetchPhotosByTopic}
        favorites={favorites}
        toggleLike={updateToFavPhotoIds}
        photos={photoData}
        topics={topicData}
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
