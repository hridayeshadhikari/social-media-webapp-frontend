import {applyMiddleware,combineReducers,legacy_createStore} from 'redux';
import {thunk} from 'redux-thunk'
import { authReducer } from './Auth/auth.reducer';
import { postReducer } from './Post/post.reducer';
import { messageReducer } from './Message/message.reducer';

const rootReducers=combineReducers({
auth:authReducer,
post:postReducer,
message:messageReducer
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk))