import React, { useState } from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ likesCount, topics, likedImages, fetchPhotosByTopic }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const areAnyImagesLiked = Boolean(likedImages && likedImages.length > 0);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
        <TopicList 
          handleTopicSelect={handleTopicSelect}
          topics={topics}
          fetchPhotosByTopic={fetchPhotosByTopic} 
          selectedTopic={selectedTopic}
        />
      </div>
      <div className="top-nav-bar__likes">
        <FavIcon displayAlert={areAnyImagesLiked} selected={areAnyImagesLiked} />
        <span className="likes-count">{likesCount}</span>
        {likedImages.length > 0 && <span className="notification">🌟</span>}
      </div>
    </div>
  );
};

export default TopNavigationBar;
