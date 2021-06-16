import React from "react";

import Searchbar from "./Components/Searchbar";

class App extends React.Component {
  state = {
    searchQuery: "",
  };
  onChangeQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
      </div>
    );
  }
}

export default App;
