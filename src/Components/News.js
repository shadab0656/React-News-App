import React, { Component } from "react";
import NewsItems from "./NewsItems";
const apiKey = "3de9474dddea4c09a66b7157f0c26e7a";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.cat}&apiKey=${apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  };

  async componentDidMount() {
    this.updateNews();
  }
  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  heading = {
    fontSize: "3.5rem",
    color: "white",
    backgroundColor: "#5679aa",
  };

  render() {
    return (
      <div>
        <h2 style={this.heading} className="text-center">
          Top Headlines of India
        </h2>
        <div className="container my-3">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItems
                    title={element.title}
                    description={element.description}
                    image={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
            <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-dark btn-sm"
                onClick={this.handlePrev}
              >
                &larr; Previous
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                type="button"
                className="btn btn-dark btn-sm"
                onClick={this.handleNext}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
