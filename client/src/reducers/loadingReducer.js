import * as TYPES from "../actions/types"

const INITIAL_STATE = {
    loading: true
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.LOADING_BEGIN:
            return { ...state, loading: true }
        case TYPES.LOADING_END:
            return { ...state, loading: false }
        default:
            return state
    }
}
