import React from "react";

import imageAPI from "./servises/imageAPI";
import ImageGallery from "./Components/ImageGallery";
import ImageGalleryItem from "./Components/ImageGalleryItem";
import LoadMore from "./Components/LoadMore";

import Searchbar from "./Components/Searchbar";

class App extends React.Component {
  state = {
    searchQuery: "",
    images: [],
    page: 1,
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
    const { searchQuery, page } = this.state;
    const options = {
      searchQuery,
      page,
    };

    imageAPI
      .fetchImage(options)
      .then(({ hits }) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }))
      );

    //  this.setState({images: respImages})
  };
  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, page: 1 });
  };

  render() {
    const { images } = this.state;
    const LoadMoreButton = images.length > 0;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery>
          <ImageGalleryItem imageArr={images} />
        </ImageGallery>
        {LoadMoreButton && <LoadMore onChange={this.fetchImages} />}
      </div>
    );
  }
}

export default App;
