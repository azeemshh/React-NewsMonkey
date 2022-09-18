import React, { Component } from "react";
import NewItems from "./NewItems";
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 15,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = { articles: [], page: 1 };
  }

  updateNews = async () => {
    const url = `
    https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cdd43373c21d4bf88fb5560efc837517&page=${this.state.page}&pageSize=${this.props.pageSize}`;
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

  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container ">
        <h1 className="text-center my-3">NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((e) => {
            return (
              <div className="col-md-4 my-3">
                <NewItems
                  title={e.title ? e.title.slice(0, 60) : "No title"}
                  description={
                    e.description
                      ? e.description.slice(0, 100)
                      : "No Description"
                  }
                  imageUrl={e.urlToImage}
                  newsUrl={e.url}
                  author={e.author}
                  date={e.publishedAt}
                  source={e.source.name}
                />
              </div>
            );
          })}

          {/* Buttons */}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
