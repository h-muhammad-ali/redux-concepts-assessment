import { SET_GENRE_CARDS_VISIBILITY } from "./genreCardsTypes";

const initialState = {
    genreCardsVisibility: true,
}

const genreCardsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_GENRE_CARDS_VISIBILITY:
            return {
                ...state,
                genreCardsVisibility: action.payload,
            }
    
        default:
            return state;
    }
}

export default genreCardsReducer;