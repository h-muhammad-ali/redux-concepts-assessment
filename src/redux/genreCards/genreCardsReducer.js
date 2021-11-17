import { SET_GENRE_CARDS_VISIBILITY } from "./genreCardsTypes";

const initialState = {
  genreCardsVisibility: true,
};

const genreCardsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_GENRE_CARDS_VISIBILITY:
      return {
        ...state,
        genreCardsVisibility: payload,
      };

    default:
      return state;
  }
};

export default genreCardsReducer;
