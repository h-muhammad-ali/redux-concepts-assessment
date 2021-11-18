import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SET_SELECTED_MOVIE,
} from "./moviesTypes";

const initialState = {
  loading: false,
  movies: [],
  error: "",
  selectedMovie: 0,
};

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: payload,
        error: "",
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        movies: [],
        error: payload,
      };
    case SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: payload
      }

    default:
      return state;
  }
};

export default moviesReducer;
