import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem';

const PhotoDetailsModal = ({ closeModal, photo, similarPhotos, toggleLike, favorites, setFavorites }) => {

  useEffect(() => {
    console.log("Selected Photo Details:", photo);
  }, [photo]);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div className="photo-details-modal__images">
        <PhotoListItem 
          id={photo?.id}
          city={photo?.location?.city}
          country={photo?.location?.country}
          imageSource={photo?.urls?.regular}
          username={photo?.user?.username}
          profile={photo?.user?.profile_image?.small}
          toggleLike={toggleLike}
          favorites={favorites}
          photo={photo}
        />
        <div className="similar-photos">
          <p className="photo-details-modal__header">Similar photos</p>
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
