import { api } from "../../config/api"
import { CREATE_CHAT_FAILURE, CREATE_CHAT_REQUEST, CREATE_CHAT_SUCCESS, CREATE_MESSAGE_FAILURE, CREATE_MESSAGE_REQUEST, CREATE_MESSAGE_SUCCESS, GET_ALL_CHAT_FAILURE, GET_ALL_CHAT_REQUEST, GET_ALL_CHAT_SUCCESS } from "./message.actionType"

export const createMessage = (message) => async (dispatch) => {
    dispatch({ type: CREATE_MESSAGE_REQUEST })
    try {
        const { data } = await api.post(`api/message/messages/chat/`, message);
        console.log("message created", data)
        dispatch({ type: CREATE_MESSAGE_SUCCESS, payload: data })
    } catch (error) {
        console.log("error ", error);
        dispatch({ type: CREATE_MESSAGE_FAILURE, payload: error })

    }
}

export const createChat = (chat) => async (dispatch) => {
    dispatch({ type: CREATE_CHAT_REQUEST })
    try {
        const { data } = await api.post(`api/chats`, chat);
        console.log("chat created", data)
        dispatch({ type: CREATE_CHAT_SUCCESS, payload: data })
    } catch (error) {
        console.log("error ", error);
        dispatch({ type: CREATE_CHAT_FAILURE, payload: error })

    }
}

export const allChatOfUser = () => async (dispatch) => {
    dispatch({ type: GET_ALL_CHAT_REQUEST })
    try {
        const { data } = await api.get(`api/chats`);
        console.log("message created", data)
        dispatch({ type: GET_ALL_CHAT_SUCCESS, payload: data })
    } catch (error) {
        console.log("error ", error);
        dispatch({ type: GET_ALL_CHAT_FAILURE, payload: error })

    }
}