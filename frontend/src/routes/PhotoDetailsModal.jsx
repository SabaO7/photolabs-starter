import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ closeModal, photo, similarPhotos, toggleLike, favorites, setFavorites}) => {
  
  useEffect(() => {
    console.log("Selected Photo Details:", photo);
  }, [photo]);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal--header">Photo Details</div>
      <div className="photo-details-modal--images">
        <img className="photo-details-modal--image" src={photo?.urls?.regular} alt={photo?.id} />
        <div className="similar-photos">
        <h3>Similar Photos</h3>
        <PhotoList 
          photos={similarPhotos} 
          toggleLike={toggleLike} 
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
