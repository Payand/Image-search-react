import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFromSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{ border: ".1em solid black" }}>
        <form className="ui form" onSubmit={this.onFromSubmit} name="search">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              style={{ border: ".1em solid black" }}
            />
          </div>
          <button htmlFor="search">Search</button>

          {this.state.term.length < 4 ? (
            <ul style={{ color: "red" }}>
              <li>Your search word should be in english</li>

              <li>Be polite😎</li>
            </ul>
          ) : this.state.term.match(/[!@#$%^&*()_+~]/g) ? (
            <ul>
              <li style={{ color: "red", fontSize: "1.5rem" }}>
                please remove character
              </li>
            </ul>
          ) : (
            " "
          )}
        </form>
      </div>
    );
  }
}

export default SearchBar;
