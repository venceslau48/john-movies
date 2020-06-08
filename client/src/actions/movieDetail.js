import * as TYPES from "./types"
import axios from "axios"

//GET MOVIE DETAIL
export const movieDetail = id => {
    return dispatch => {
        return axios({
            method: "get",
            url: "/movieDetail/movie",
            params: {
                id
            }
        })
            .then(response => {
                dispatch({
                    type: TYPES.MOVIE_DETAIL,
                    payload: {
                        movie: response.data
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

//GET TV SHOW DETAIL
export const serieDetail = id => {
    return dispatch => {
        return axios({
            method: "get",
            url: "/movieDetail/tvShow",
            params: {
                id
            }
        })
            .then(response => {
                dispatch({
                    type: TYPES.MOVIE_DETAIL,
                    payload: {
                        movie: response.data
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
