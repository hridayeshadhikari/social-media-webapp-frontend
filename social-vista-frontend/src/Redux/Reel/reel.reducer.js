import { GET_ALL_REELS_FAILURE, GET_ALL_REELS_REQUEST, GET_ALL_REELS_SUCCESS, GET_USERS_REEL_FAILURE, GET_USERS_REEL_REQUEST, GET_USERS_REEL_SUCCESS } from "./reel.actionType";


// Initial state
const initialState = {
    reel: [],
    loading: false,
    error: null
};

// Reducer function
const reelReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_REELS_REQUEST:
        case GET_USERS_REEL_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_ALL_REELS_SUCCESS:
        case GET_USERS_REEL_SUCCESS:
            return {
                ...state,
                reel: action.payload, // Update 'reel' with the fetched data
                loading: false,
                error: null
            };
        case GET_ALL_REELS_FAILURE:
        case GET_USERS_REEL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload // Update 'error' with the error received
            };
        default:
            return state;
    }
};

export default reelReducer;
