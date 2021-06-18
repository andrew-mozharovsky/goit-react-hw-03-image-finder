import React from "react";

const ImageGallery = ({ children, imageClick }) => {
  return (
    <ul onClick={imageClick} className="ImageGallery">
      {children}
    </ul>
  );
};
export default ImageGallery;
