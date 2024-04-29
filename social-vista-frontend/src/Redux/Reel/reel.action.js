import { api } from "../../config/api"
import { GET_ALL_REELS_FAILURE, GET_ALL_REELS_REQUEST, GET_ALL_REELS_SUCCESS } from "./reel.actionType"

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