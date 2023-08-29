import React, { useState, useEffect } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = (props) => {
  const { favImagesArr, id, isFav } = props; 
  
  const [selected, setSelected] = useState(
    favImagesArr && favImagesArr.includes(id) ? true : false 
  );

  const handleClick = () => {
    setSelected(!selected);
    if (isFav) {  
      selected === true ? isFav(false, id) : isFav(true, id);  
    }
  };

  useEffect(() => {
    if (favImagesArr) {
      favImagesArr.includes(id) ? setSelected(true) : setSelected(false);
    }
  }, [favImagesArr, id]); 

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
