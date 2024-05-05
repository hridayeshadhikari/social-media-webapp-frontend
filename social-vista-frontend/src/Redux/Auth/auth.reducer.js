import { FOLLOW_USER_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, GET_ALL_USER_FAILURE, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS, SEARCH_USER_SUCCESS, UPDATE_PROFILE_SUCCESS } from "./auth.actionType"

const initialState = {
    jwt: null,
    error: null,
    loading: false,
    user: null,
    saarchUser:[],
    users:[]
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case GET_PROFILE_REQUEST:
        case FOLLOW_USER_REQUEST:
        case GET_ALL_USER_REQUEST:
            return { ...state, loading: true, error: null }


        case GET_PROFILE_SUCCESS:
        case UPDATE_PROFILE_SUCCESS:
        case FOLLOW_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false, error: null, jwt: action.payload }

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return { ...state, jwt: action.payload, loading: false, error: null }

        case SEARCH_USER_SUCCESS:
            return{
                ...state,
                searchUser:action.payload,
                loading:false,
                error:null
            }

        case GET_ALL_USER_SUCCESS:
            return{
                ...state,
                users:action.payload,
                loading:false,
                error:null
            }

        
        case FOLLOW_USER_FAILURE:
        case LOGIN_FAILURE:
        case GET_ALL_USER_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}