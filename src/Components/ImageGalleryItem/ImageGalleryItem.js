// import Reacr from 'react'
// import ImageGallery from '../ImageGallery/ImageGallery'

const ImageGalleryItem = ({ imageArr }) => {
  return imageArr.map(({ webformatURL, id, tags }) => {
    return (
      <li key={id} className="ImageGalleryItem">
        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
      </li>
    );
  });
};

export default ImageGalleryItem;
