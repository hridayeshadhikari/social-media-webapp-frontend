import { api } from "../../config/api"
import { CREATE_REEL_FAILURE, CREATE_REEL_REQUEST, CREATE_REEL_SUCCESS, GET_ALL_REELS_FAILURE, GET_ALL_REELS_REQUEST, GET_ALL_REELS_SUCCESS } from "./reel.actionType"

export const getAllReels=()=>async (dispatch)=>{
    dispatch({type:GET_ALL_REELS_REQUEST})
    try {
        const {data}=await api.get("/api/reels")
        dispatch({type:GET_ALL_REELS_SUCCESS,payload:data})
        // console.log("<========>",data)
    } catch (error) {
        dispatch({type:GET_ALL_REELS_FAILURE,payload:error})
    }
}

export const createReel=(reelData)=>async (dispatch)=>{
    dispatch({type:CREATE_REEL_REQUEST})
    try {
        const {data}=await api.post("/api/reel/create",reelData)
        dispatch({type:CREATE_REEL_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CREATE_REEL_FAILURE,payload:error})
    }
}