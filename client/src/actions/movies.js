import * as TYPES from "./types"
import axios from "axios"

//POPULAR
export const moviesPopular = page => {
    return dispatch => {
        dispatch({ type: TYPES.LOADING_BEGIN })
        return axios({
            method: "get",
            url: "/movies/popular",
            params: {
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

//TOP RATED
export const moviesTopRated = page => {
    return dispatch => {
        dispatch({ type: TYPES.LOADING_BEGIN })
        return axios({
            method: "get",
            url: "/movies/topRated",
            params: {
                page
            }
        })
            .then(response => {
                dispatch({
                    type: TYPES.MOVIES_TOP_RATED,
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

//NEW IN
export const moviesNewIn = page => {
    return dispatch => {
        dispatch({ type: TYPES.LOADING_BEGIN })
        return axios({
            method: "get",
            url: "/movies/comingSoon",
            params: {
                page
            }
        })
            .then(response => {
                dispatch({
                    type: TYPES.MOVIES_TOP_RATED,
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

//SEARCH FOR MOVIES
export const searchMovies = search => {
    return dispatch => {
        dispatch({ type: TYPES.LOADING_BEGIN })
        return axios({
            method: "get",
            url: "/movies/search",
            params: {
                search
            }
        })
            .then(response => {
                dispatch({
                    type: TYPES.MOVIES_TOP_RATED,
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
