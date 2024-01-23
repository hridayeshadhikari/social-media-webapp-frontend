import { LOGIN_FAILURE, LOGIN_REQUEST, REGISTER_REQUEST} from "./auth.actionType"

export const loginUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const{data}=await axios.post(`${API_BASE_URL}/auth/signin`,loginData.data)
        if(data.jwt){
            localStorage.setItem(data.jwt)
            
        }
        console.log("login success,data")
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})

    }catch(error){
        console.log("-----------",error)
        dispatch({type:LOGIN_FAILURE,payload:error})
    };
    
}

export const registerUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{
        const{data}=await axios.post(`${API_BASE_URL}/auth/register`,loginData.data)
        if(data.jwt){
            localStorage.setItem(data.jwt)
            
        }
        console.log("register success",data)
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})

    }catch(error){
        console.log("-----------",error)
        dispatch({type:LOGIN_FAILURE,payload:error})
    };
    
}