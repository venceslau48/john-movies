import * as TYPES from "../actions/types"

const INITIAL_STATE = {
    genres: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.GENRES:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
