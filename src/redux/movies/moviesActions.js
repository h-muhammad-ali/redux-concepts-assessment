import {FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS,FETCH_MOVIES_FAILURE} from './moviesTypes';
import axios from 'axios';

export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST,
    }
}

export const fetchMoviesSuccess = users => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: users,
    }
}

export const fetchMoviesFailure = error => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error,
    }
}

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest());
        axios.get("../../movies-data.json")
            .then(response => {
                const movies = response.data;
                dispatch(fetchMoviesSuccess(movies));
            })
            .catch(error => {
                dispatch(fetchMoviesFailure(error.message));
            })
    }
}