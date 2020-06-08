import * as TYPES from "./types"
import axios from "axios"

//POPULAR
export const tvShowPopular = page => {
    return dispatch => {
        dispatch({ type: TYPES.LOADING_BEGIN })
        return axios({
            method: "get",
            url: "/tvShows/popular",
            params: {
                page
            }
        })
            .then(response => {
                dispatch({
                    type: TYPES.TV_SHOWS_POPULAR,
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
export const tvShowTopRated = page => {
    return dispatch => {
        dispatch({ type: TYPES.LOADING_BEGIN })
        return axios({
            method: "get",
            url: "/tvShows/topRated",
            params: {
                page
            }
        })
            .then(response => {
                dispatch({
                    type: TYPES.TV_SHOWS_TOP_RATED,
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

//SEARCH FOR TV SHOWS
export const searchTvShows = search => {
    return dispatch => {
        dispatch({ type: TYPES.LOADING_BEGIN })
        return axios({
            method: "get",
            url: "/tvShows/search",
            params: {
                search
            }
        })
            .then(response => {
                dispatch({
                    type: TYPES.TV_SHOWS_TOP_RATED,
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
