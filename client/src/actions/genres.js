import * as TYPES from "./types"
import axios from "axios"

//GET SIDEBAR GENRES
export const genres = () => {
    return dispatch => {
        return axios({
            method: "get",
            url: "/genres/sidebar"
        })
            .then(response => {
                dispatch({
                    type: TYPES.GENRES,
                    payload: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

//GET MOVIE BY GENRE
export const moviesGenre = (id, page) => {
    return dispatch => {
        dispatch({ type: TYPES.LOADING_BEGIN })
        return axios({
            method: "get",
            url: "/genres/movies",
            params: {
                id,
                page
            }
        })
            .then(response => {
                dispatch({
                    type: TYPES.MOVIES_POPULAR,
                    payload: {
                        movies: response.data
                    }
                })
                dispatch({ type: TYPES.LOADING_END })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

//GET TV SHOW BY GENRE
export const tvShowsGenre = (id, page) => {
    return dispatch => {
        dispatch({ type: TYPES.LOADING_BEGIN })
        return axios({
            method: "get",
            url: "/genres/tvShows",
            params: {
                id,
                page
            }
        })
            .then(response => {
                dispatch({
                    type: TYPES.MOVIES_POPULAR,
                    payload: {
                        movies: response.data
                    }
                })
                dispatch({ type: TYPES.LOADING_END })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
