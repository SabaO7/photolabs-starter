import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);
  const [similarPhotos, setSimilarPhotos] = React.useState([]);

  const handlePhotoClick = (photo) => {
    console.log('photo:', photo);
    setIsModalOpen(true);
    setSelectedPhoto(photo);
    if (photo && photo.similar_photos) {
      setSimilarPhotos(Object.values(photo.similar_photos));
    } else {
      console.warn('similar_photos is undefined or null');
    }
  };

  const closeTheModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute handlePhotoClick={handlePhotoClick} />
      {isModalOpen && <PhotoDetailsModal photo={selectedPhoto} closeModal={closeTheModal} similarPhotos={similarPhotos} />}
    </div>
  );
};

export default App;
