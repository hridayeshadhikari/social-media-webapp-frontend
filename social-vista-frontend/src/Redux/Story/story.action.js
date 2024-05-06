import { api } from "../../config/api"
import { CREATE_STORY_FAILURE, CREATE_STORY_REQUEST, CREATE_STORY_SUCCESS, GET_FOLLOWINGS_STORY_FAILURE, GET_FOLLOWINGS_STORY_REQUEST, GET_FOLLOWINGS_STORY_SUCCESS, GET_STORY_FAILURE, GET_STORY_REQUEST, GET_STORY_SUCCESS } from "./story.actionType"

export const createStory=(values)=>async (dispatch)=>{
    dispatch({type:CREATE_STORY_REQUEST})
    try {
        const {data}=await api.post("/api/story",values)
        dispatch({type:CREATE_STORY_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CREATE_STORY_FAILURE,payload:error})
    }
}

export const getAllStory=(userId)=>async (dispatch)=>{
    dispatch({type:GET_STORY_REQUEST})
    try {
        const {data}=await api.get(`/api/stories/${userId}`)
        dispatch({type:GET_STORY_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_STORY_FAILURE,payload:error})
    }
}

export const getfollowingsStory=()=>async (dispatch)=>{
    dispatch({type:GET_FOLLOWINGS_STORY_REQUEST})
    try {
        const {data}=await api.get("/api/all/stories")
        dispatch({type:GET_FOLLOWINGS_STORY_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_FOLLOWINGS_STORY_FAILURE,payload:error})
    }
}