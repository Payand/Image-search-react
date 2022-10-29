import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBarComponent/SearchBar";
import ImageList from "./ImageListComponents/ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "2em" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p>search: {this.state.images.length} results</p>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
