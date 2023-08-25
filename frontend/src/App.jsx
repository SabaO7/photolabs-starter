import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList';
import PhotoFavButton from './components/PhotoFavButton';


const App = () => {
  return (
    <div className="App">
      <PhotoListItem/>
      <PhotoListItem />
      <PhotoList />
      <PhotoFavButton />
    </div>
  );
};

export default App;
