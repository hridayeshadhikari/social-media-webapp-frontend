import { API_BASE_URL, api } from "../../config/api"
import { FOLLOW_USER_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, GET_ALL_USER_FAILURE, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST, SEARCH_USER_FAILURE, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "./auth.actionType"
import axios from 'axios';



//method for login action
export const loginUserAction = (loginData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData.data)
        if (data.token) {
            localStorage.setItem("jwt", data.token)

        }
        console.log("login success,data")
        dispatch({ type: LOGIN_SUCCESS, payload: data.token })

    } catch (error) {
        console.log("-----------", error)
        dispatch({ type: LOGIN_FAILURE, payload: error })
    };

}

//method for register action
export const registerUserAction = (loginData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/register`, loginData.data)
        if (data.token) {
            localStorage.setItem("jwt", data.token)

        }
        console.log("register success", data)
        dispatch({ type: LOGIN_SUCCESS, payload: data.token })

    } catch (error) {
        console.log("-----------", error)
        dispatch({ type: LOGIN_FAILURE, payload: error })
    };

}

//method to get our profile
export const getProfileAction = (jwt) => async (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST })
    try {
        const jwt = localStorage.getItem("jwt")
        const { data } = await axios.get(`${API_BASE_URL}/api/user/profile`,
            {
                headers: {
                    "Authorization": `Bearer ${jwt}`,
                },
            },
        );

        console.log("profile -----", data)
        dispatch({ type: GET_PROFILE_SUCCESS, payload: data })

    } catch (error) {
        console.log("-----------", error)
        dispatch({ type: GET_PROFILE_FAILURE, payload: error })
    };

}

//method to update profile
export const updateProfileAction = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PROFILE_REQUEST })
    try {
        const { data } = await api.put(
            `${API_BASE_URL}/api/user/update`, reqData

        );

        console.log("updateprofile -----", data)
        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data })

    } catch (error) {
        console.log("-----------", error)
        dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error })
    };

}

export const searchUser = (query) => async (dispatch) => {
    dispatch({ type: SEARCH_USER_REQUEST })
    try {

        const { data } = await api.get(`/api/users/search?query=${query}`,);

        console.log("searched data -----", data)
        dispatch({ type: SEARCH_USER_SUCCESS, payload: data })

    } catch (error) {
        console.log("-----------", error)
        dispatch({ type: SEARCH_USER_FAILURE, payload: error })
    };

}

export const followUser=(userId)=>async (dispatch)=>{
    dispatch({type:FOLLOW_USER_REQUEST})
    try {
        const {data}=await api.put(`/api/users/follow/${userId}`)
        dispatch({type:FOLLOW_USER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FOLLOW_USER_FAILURE,payload:error})
    }
}

export const getAllUser=()=>async (dispatch)=>{
    dispatch({type:GET_ALL_USER_REQUEST})
    try {
        const {data}=await api.get("api/users")
        dispatch({type:GET_ALL_USER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_ALL_USER_FAILURE,payload:error})
    }
}

export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
    localStorage.clear();
}