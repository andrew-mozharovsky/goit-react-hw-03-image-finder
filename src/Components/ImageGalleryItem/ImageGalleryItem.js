// import Reacr from 'react'
// import ImageGallery from '../ImageGallery/ImageGallery'

const ImageGalleryItem = ({ imageArr }) => {
  return imageArr.map((image) => {
    return (
      <li className="ImageGalleryItem">
        <img
          src={image.userImageURL}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
