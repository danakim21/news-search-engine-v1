import { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './styles/App.css';
import no_image from './styles/no-image.jpg';
import { connect } from 'react-redux';
import { logout, addToFavorites } from './redux/newsActions';

const API_KEY = '2d4e391fc00a4365ae5a1f5b2a114263';
const API_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&sortBy=publishedAt&q=`;
const DEFAULT_QUERY = 'health';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
      queryText: DEFAULT_QUERY,
      currentPage: 1,
      userLogin: false,
    };
  }

  searchNews(query) {
    if (query === '') {
      query = DEFAULT_QUERY;
    }
    this.setState(
      {
        queryText: query,
      },
      () => {
        // console.log(API_URL + this.state.queryText);
        fetch(API_URL + this.state.queryText)
          .then((response) => response.json())
          .then((data) => this.setState({ newsData: data.articles }));
      }
    );
  }

  prevPage() {
    this.setState(
      {
        currentPage:
          this.state.currentPage === 1 ? 1 : this.state.currentPage - 1,
      },
      () => {
        fetch(
          API_URL + this.state.queryText + '&page=' + this.state.currentPage
        )
          .then((response) => response.json())
          .then((data) => this.setState({ newsData: data.articles }));
      }
    );
  }

  nextPage() {
    this.setState(
      {
        currentPage: this.state.currentPage + 1,
      },
      () => {
        fetch(
          API_URL + this.state.queryText + '&page=' + this.state.currentPage
        )
          .then((response) => response.json())
          .then((data) => this.setState({ newsData: data.articles }))
          .catch((error) => alert('No more articles'));
      }
    );
  }

  componentDidMount() {
    fetch(API_URL + this.state.queryText)
      .then((response) => response.json())
      .then((data) => this.setState({ newsData: data.articles }))
      .catch((error) => console.log(error));
  }

  render() {
    const { newsData } = this.state;

    // console.log(this.state.queryText);

    let loginButton, favoritesLink;
    if (this.props.loginSuccess) {
      loginButton = <button onClick={() => this.props.logout()}>Logout</button>;

      favoritesLink = (
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
      );
    } else {
      loginButton = (
        <Link to="/login">
          <button>Login</button>
        </Link>
      );
    }

    return (
      <div>
        <div>
          Search News:
          <input
            type="text"
            onChange={(e) => this.searchNews(e.target.value)}
          />
          <button onClick={() => this.prevPage()}>Previous Page</button>
          <button onClick={() => this.nextPage()}>Next Page</button>
          {loginButton}
          {favoritesLink}
        </div>
        <ul>
          {newsData.map((news, i) => (
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

                {this.props.loginSuccess ? (
                  <button onClick={() => this.props.addToFavorites(news)}>
                    Add to Favorites
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </ul>
        <button onClick={() => this.prevPage()}>Previous Page</button>
        <button onClick={() => this.nextPage()}>Next Page</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginSuccess: state.userLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    addToFavorites: (news) => dispatch(addToFavorites(news)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
// export default NewsList;
