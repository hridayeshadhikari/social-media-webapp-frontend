import { GET_FOLLOWINGS_STORY_FAILURE, GET_FOLLOWINGS_STORY_REQUEST, GET_FOLLOWINGS_STORY_SUCCESS, GET_STORY_FAILURE, GET_STORY_REQUEST, GET_STORY_SUCCESS } from "./story.actionType";


const initialState = {
    loading: false,
    error: null,
    story: [],
    followingsStory: []
};

const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STORY_REQUEST:
        case GET_FOLLOWINGS_STORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_STORY_SUCCESS:
            return {
                ...state,
                loading: false,
                story: action.payload
            };

        case GET_FOLLOWINGS_STORY_SUCCESS:
            return {
                ...state,
                loading: false,
                followingsStory: action.payload
            };
        case GET_STORY_FAILURE:
        case GET_FOLLOWINGS_STORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default storyReducer;
