import React from "react";

import imageAPI from "./servises/imageAPI";
import ImageGallery from "./Components/ImageGallery";
import ImageGalleryItem from "./Components/ImageGalleryItem";

import Searchbar from "./Components/Searchbar";

class App extends React.Component {
  state = {
    searchQuery: "",
    images: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }
  fetchImages = () => {
    imageAPI.fetchImage().then((res) => this.setState({ images: res.hits }));

    //  this.setState({images: respImages})
  };
  onChangeQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery>
          <ImageGalleryItem imageArr={images} />
        </ImageGallery>
      </div>
    );
  }
}

export default App;
