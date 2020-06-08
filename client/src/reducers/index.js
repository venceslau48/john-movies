import { combineReducers } from "redux"
import Loading from "./loadingReducer"
import Movies from "./moviesReducer"
import Genres from "./genresReducer"
import Search from "./searchReducer"

export default combineReducers({
    loadingReducer: Loading,
    moviesReducer: Movies,
    genresReducer: Genres,
    searchReducer: Search
})
