import { CREATE_COMMENT_SUCCESS, CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_ALL_POST_FAILURE, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, GET_SAVE_POST_SUCCESS, LIKE_COMMENT_FAILURE, LIKE_COMMENT_REQUEST, LIKE_COMMENT_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS } from "./post.actionType"

const initialState = {
    post: null,
    error: null,
    loading: false,
    posts: [],
    like: null,
    comments: [],
    newComment: null,
    savePost: []
}
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST_REQUEST:
        case GET_ALL_POST_REQUEST:
        case LIKE_POST_REQUEST:
        case LIKE_COMMENT_REQUEST:
            return { ...state, loading: true, error: null }

        case GET_ALL_POST_SUCCESS:
            return {
                ...state, posts: action.payload, loading: false, error: null, comments: action.payload.comments
            }
        case CREATE_POST_SUCCESS:
            return { ...state, post: action.payload, loading: false, error: null, posts: [action.payload, ...state.post] }

        case GET_SAVE_POST_SUCCESS:
            return {
                ...state, savePost: action.payload, loading: false, error: null
            }

        case LIKE_COMMENT_SUCCESS:
            return {
                ...state,
                newComment: action.payload,
                loading: false,
                error: null,
            };
        case LIKE_POST_SUCCESS:
            return {
                ...state, like: action.payload, posts: state.posts.map((item) => item.id === action.payload
                    .id ? action.payload : item),
                loading: false,
                error: null
            }

        case CREATE_COMMENT_SUCCESS:
            return {
                ...state, newComment: action.payload, loading: false, error: null
            }

        case CREATE_POST_FAILURE:
        case GET_ALL_POST_FAILURE:
        case LIKE_POST_FAILURE:
        case LIKE_COMMENT_FAILURE:
            return { ...state, error: action.payload, loading: false }


        default:
            return state;
    }
}