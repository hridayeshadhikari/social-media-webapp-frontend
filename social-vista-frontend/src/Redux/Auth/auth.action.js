import { API_BASE_URL, api } from "../../config/api"
import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_REQUEST, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS} from "./auth.actionType"
import axios from 'axios';



//method for signup action
export const loginUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const{data}=await axios.post(`${API_BASE_URL}/auth/signin`,loginData.data)
        if(data.token){
            localStorage.setItem("jwt",data.token)
            
        }
        console.log("login success,data")
        dispatch({type:LOGIN_SUCCESS,payload:data.token})

    }catch(error){
        console.log("-----------",error)
        dispatch({type:LOGIN_FAILURE,payload:error})
    };
    
}

//method for register action
export const registerUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{
        const{data}=await axios.post(`${API_BASE_URL}/auth/register`,loginData.data)
        if(data.token){
            localStorage.setItem("jwt",data.token)
            
        }
        console.log("register success",data)
        dispatch({type:LOGIN_SUCCESS,payload:data.token})

    }catch(error){
        console.log("-----------",error)
        dispatch({type:LOGIN_FAILURE,payload:error})
    };
    
}

//method to get our profile
export const getProfileAction=(jwt)=>async(dispatch)=>{
    dispatch({type:GET_PROFILE_REQUEST})
    try{
        const jwt=localStorage.getItem("jwt")
        const{data}=await axios.get(`${API_BASE_URL}/api/user/profile`,
            {
                headers :{
                    "Authorization": `Bearer ${jwt}`,
                },
            },
            );
        
        console.log("profile -----",data)
        dispatch({type:GET_PROFILE_SUCCESS,payload:data})

    }catch(error){
        console.log("-----------",error)
        dispatch({type:GET_PROFILE_FAILURE,payload:error})
    };
    
}

//method to update profile
export const updateProfileAction=(reqData)=>async(dispatch)=>{
    dispatch({type:UPDATE_PROFILE_REQUEST})
    try{
        const{data}=await api.put(
            `${API_BASE_URL}/api/user/update`,reqData
            
            );
        
        console.log("updateprofile -----",data)
        dispatch({type:UPDATE_PROFILE_SUCCESS,payload:data})

    }catch(error){
        console.log("-----------",error)
        dispatch({type:UPDATE_PROFILE_FAILURE,payload:error})
    };
    
}