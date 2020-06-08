import * as TYPES from "../actions/types";

const INITIAL_STATE = {
    movies: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.MOVIE_SEARCH:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
