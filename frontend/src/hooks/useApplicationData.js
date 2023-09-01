import { useState } from 'react';

const useApplicationData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const updateToFavPhotoIds = (isLiked, imageId) => {
    if (isLiked) {
      if (!favorites.includes(imageId)) {
        setFavorites([...favorites, imageId]);
      }
    } else {
      setFavorites(favorites.filter(id => id !== imageId));
    }
  };

  const setPhotoSelected = (photo) => {
    setIsModalOpen(true);
    setSelectedPhoto(photo);
    if (photo && photo.similar_photos) {
      setSimilarPhotos(Object.values(photo.similar_photos));
    }
  };

  const onClosePhotoDetailsModal = () => {
    setIsModalOpen(false);
  };

  return {
    state: { isModalOpen, selectedPhoto, similarPhotos, favorites },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;
