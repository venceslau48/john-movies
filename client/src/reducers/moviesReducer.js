import * as TYPES from "../actions/types"

const INITIAL_STATE = {
    movies: {
        results: []
    },
    movie: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.MOVIES_POPULAR:
            return { ...state, ...action.payload }
        case TYPES.MOVIES_TOP_RATED:
            return { ...state, ...action.payload }
        case TYPES.MOVIES_NEW_IN:
            return { ...state, ...action.payload }
        case TYPES.TV_SHOWS_POPULAR:
            return { ...state, ...action.payload }
        case TYPES.TV_SHOWS_TOP_RATED:
            return { ...state, ...action.payload }
        case TYPES.IN_THEATERS:
            return { ...state, ...action.payload }
        case TYPES.MOVIE_DETAIL:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
