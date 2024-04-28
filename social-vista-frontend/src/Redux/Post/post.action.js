import { api } from "../../config/api"
import { CREATE_COMMENT_FAILURE, CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS, CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_ALL_POST_FAILURE, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, GET_SAVE_POST_FAILURE, GET_SAVE_POST_REQUEST, GET_SAVE_POST_SUCCESS, GET_USERS_POST_FAILURE, GET_USERS_POST_REQUEST, GET_USERS_POST_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, SAVE_POST_FAILURE, SAVE_POST_REQUEST, SAVE_POST_SUCCESS } from "./post.actionType"

//action for creating the post

export const createPostAction = (postData) => async (dispatch) => {
    dispatch({ type: CREATE_POST_REQUEST })
    try {
        const { data } = await api.post("/api/post", postData)
        dispatch({ type: CREATE_POST_SUCCESS, payload: data })
        console.log("created post------", data)
    } catch (error) {
        console.log("error", error)
        dispatch({ type: CREATE_POST_FAILURE, payload: error })

    }
}

//action for getting all the post that are posted

export const getAllPostAction = () => async (dispatch) => {
    dispatch({ type: GET_ALL_POST_REQUEST })
    try {
        const { data } = await api.get("/api/user/posts")
        dispatch({ type: GET_ALL_POST_SUCCESS, payload: data })
        console.log("get all post------", data)
    } catch (error) {
        console.log("error", error)
        dispatch({ type: GET_ALL_POST_FAILURE, payload: error })

    }
}

// action for getting all the post of particular user

export const getUsersPostAction = (userId) => async (dispatch) => {
    dispatch({ type: GET_USERS_POST_REQUEST })
    try {
        const { data } = await api.get(`/api/user/post/${userId}`)
        dispatch({ type: GET_USERS_POST_SUCCESS, payload: data })
        console.log("users post------", data)
    } catch (error) {
        console.log("error", error)
        dispatch({ type: GET_USERS_POST_FAILURE, payload: error })

    }
}

//action for like post

export const likePostAction = (postId) => async (dispatch) => {
    dispatch({ type: LIKE_POST_REQUEST })
    try {
        const { data } = await api.put(`/api/like/post/${postId}`)
        dispatch({ type: LIKE_POST_SUCCESS, payload: data })
        console.log("post liked------", data)
    } catch (error) {
        console.log("error", error)
        dispatch({ type: LIKE_POST_FAILURE, payload: error })

    }
}

//create comment action

export const createCommentAction = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_COMMENT_REQUEST })
    try {
        const { data } = await api.post(`/api/post/comment/${reqData.postId}`, reqData.data)
        dispatch({ type: CREATE_COMMENT_SUCCESS, payload: data })
        console.log(" comment created------", data)
    } catch (error) {
        console.log("error", error)
        dispatch({ type: CREATE_COMMENT_FAILURE, payload: error })

    }
}

export const savePost=(postId)=> async (dispatch)=>{
    dispatch({type:SAVE_POST_REQUEST})
    try {
        const {data}=await api.put(`/api/posts/save/${postId}`)
        dispatch({type:SAVE_POST_SUCCESS,payload:data})
    } catch (error) {
        console.log("<====error====>")
        dispatch({type:SAVE_POST_FAILURE,payload:error})
    }
}

export const getSavePost=()=>async(dispatch)=>{
    dispatch({type:GET_SAVE_POST_REQUEST})
    try{
        const {data}=await api.get("/api/posts/save")
        console.log("<====data====>",data)
        dispatch({type:GET_SAVE_POST_SUCCESS,payload:data})
    }
    catch(error){
        console.log("<====error====>")
        dispatch({type:GET_SAVE_POST_FAILURE,payload:error})
    }
}