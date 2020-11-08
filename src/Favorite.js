import React, { Component } from 'react';
import { connect } from 'react-redux';
import no_image from './styles/no-image.jpg';
import { Link } from 'react-router-dom';
import { removeFromFavorites } from './redux/newsActions';

class Favorite extends Component {
  componentDidMount() {
    if (!this.props.loginSuccess) {
      alert('You must first login');
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div>
        <Link to="/">
          <button>Back</button>
        </Link>
        <h1>Favorites</h1>
        <ul>
          {this.props.favoriteArticles.map((news, i) => (
            <div key={i} className="news-row">
              <img
                src={news.urlToImage ? news.urlToImage : no_image}
                alt="article"
              />
              <div>
                <a href={news.url} target="_blank" rel="noreferrer">
                  <h2>{news.title}</h2>
                </a>
                <p>
                  {news.publishedAt.slice(0, 10)}{' '}
                  {news.publishedAt.slice(11, 19)}
                </p>
                <p>
                  {news.author} / {news.source.name}
                </p>
                <p>{news.content ? news.content.slice(0, 200) : ''}</p>
                <button onClick={() => this.props.removeFromFavorites(news)}>
                  Remove from favorites
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginSuccess: state.userLogin,
    favoriteArticles: state.favoriteArticles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavorites: (news) => dispatch(removeFromFavorites(news)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
