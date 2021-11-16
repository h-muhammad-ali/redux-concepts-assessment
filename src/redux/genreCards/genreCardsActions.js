import { SET_GENRE_CARDS_VISIBILITY } from "./genreCardsTypes";

export const setGenreCardsVisibility = value => {
    return {
        type: SET_GENRE_CARDS_VISIBILITY,
        payload: value,
    }
}