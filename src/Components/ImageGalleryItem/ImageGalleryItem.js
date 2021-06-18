const ImageGalleryItem = ({ imageArr, onClick }) => {
  return imageArr.map(({ webformatURL, id, tags, largeImageURL }) => {
    return (
      <li onClick={onClick} key={id} className="ImageGalleryItem">
        <img
          data-largeurl={largeImageURL}
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
