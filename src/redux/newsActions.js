import {
  LOGIN_SUCCESS,
  LOGOUT,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from './newsTypes';

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const addToFavorites = (article) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: { article },
  };
};

export const removeFromFavorites = (article) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: { article },
  };
};
