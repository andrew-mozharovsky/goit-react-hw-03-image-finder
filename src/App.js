import React from "react";
import Loader from "react-loader-spinner";

import imageAPI from "./services/services";
import ImageGallery from "./Components/ImageGallery";
import ImageGalleryItem from "./Components/ImageGalleryItem";
import LoadMore from "./Components/LoadMore";
import Searchbar from "./Components/Searchbar";
import Modal from "./Components/Modal";

class App extends React.Component {
  state = {
    searchQuery: "",
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    largeImage: "",
    alt: "",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  fetchImages = () => {
    this.setState({ loading: true });
    const { searchQuery, page } = this.state;
    const options = {
      searchQuery,
      page,
    };
    // setTimeout(() => {
    //   return imageAPI
    //     .fetchImage(options)
    //     .then(({ hits }) =>
    //       this.setState((prevState) => ({
    //         images: [...prevState.images, ...hits],
    //         page: prevState.page + 1,
    //       }))
    //     )
    //     .finally(this.setState({ loading: false }));
    // }, 2000);
    imageAPI
      .fetchImage(options)
      .then(({ hits }) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }))
      )
      .finally(this.setState({ loading: false }));
  };
  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  getLargeImage = (e) => {
    this.setState({ largeImage: e.target.dataset.largeurl, alt: e.target.alt });
  };

  render() {
    const { images, loading, showModal, largeImage, alt } = this.state;
    const LoadMoreButton = images.length > 0;
    return (
      <div className={"container"}>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery imageClick={this.getLargeImage}>
          <ImageGalleryItem onClick={this.toggleModal} imageArr={images} />
        </ImageGallery>
        {loading && (
          <Loader
            className={"spinier"}
            type="Oval"
            color="#00BFFF"
            height={50}
            width={50}
          />
        )}

        {LoadMoreButton && !loading && <LoadMore onChange={this.fetchImages} />}
        {showModal && (
          <Modal
            largeImage={largeImage}
            alt={alt}
            closeModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

export default App;
