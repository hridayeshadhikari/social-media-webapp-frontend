import {applyMiddleware,combineReducers,legacy_createStore} from 'redux';
import {thunk} from 'redux-thunk'
import { authReducer } from './Auth/auth.reducer';
import { postReducer } from './Post/post.reducer';

const rootReducers=combineReducers({
auth:authReducer,
post:postReducer
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk))