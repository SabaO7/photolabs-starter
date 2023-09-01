import { useReducer, useEffect } from 'react';


const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  similarPhotos: [],
  favorites: [],
  photoData: [],
  topicData: []
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SET_SIMILAR_PHOTOS: 'SET_SIMILAR_PHOTOS',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.id]
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload.id)
      };

    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload.isModalOpen
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo
      };

    case ACTIONS.SET_SIMILAR_PHOTOS:
      return {
        ...state,
        similarPhotos: action.payload.similarPhotos
      };

      case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (isLiked, imageId) => {
    if (isLiked) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: imageId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: imageId } });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: { isModalOpen: true } });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
    if (photo && photo.similar_photos) {
      dispatch({ type: ACTIONS.SET_SIMILAR_PHOTOS, payload: { similarPhotos: Object.values(photo.similar_photos) } });
    }
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: { isModalOpen: false } });
  };

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
    
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;
