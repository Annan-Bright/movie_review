//import React from "react";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
  }
  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=qUAO5s2dlWztoyvAN7iugvr16lkaYEd8"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        this.setState({ reviews: res.results });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.reviews.map((result) => {
          return (
            <div>
              <b>Title</b>
              <h1>{result.display_title}</h1>
              <b>Release date</b>
              <h2>
                {result.publication_date}
                {""}
              </h2>
              <b>Critics</b>
              <h3>{result.byline}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
