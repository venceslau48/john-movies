import * as TYPES from "./types"
import axios from "axios"

//EM EXIBIÇÃO
export const inTheaters = page => {
    return dispatch => {
        dispatch({ type: TYPES.LOADING_BEGIN })
        return axios({
            method: "get",
            url: "/inTheaters",
            params: {
                page
            }
        })
            .then(response => {
                dispatch({
                    type: TYPES.IN_THEATERS,
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
