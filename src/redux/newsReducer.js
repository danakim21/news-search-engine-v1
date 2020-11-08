import {
  LOGIN_SUCCESS,
  LOGOUT,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from './newsTypes';

const initialState = {
  userLogin: false,
  favoriteArticles: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        userLogin: false,
      };
    case ADD_TO_FAVORITES:
      console.log('NEW FAVORITE');
      alert('Added to favorites!');
      return {
        ...state,
        favoriteArticles: [...state.favoriteArticles, action.payload.article],
      };
    case REMOVE_FROM_FAVORITES:
      alert('Removed from favorites');
      return {
        ...state,
        favoriteArticles: state.favoriteArticles.filter(
          (news) => news.title !== action.payload.article.title
        ),
      };
    default:
      return state;
  }
};

export default newsReducer;
