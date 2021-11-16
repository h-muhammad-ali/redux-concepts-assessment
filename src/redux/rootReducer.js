import { combineReducers } from "redux";
import moviesReducer from './movies/moviesReducer';
import genreCardsReducer from './genreCards/genreCardsReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    genreCards: genreCardsReducer,
})

export default rootReducer; 