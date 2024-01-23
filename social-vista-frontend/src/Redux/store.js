import {applyMiddleware,combineReducers,legacy_createStore} from 'redux';
import thunk from 'redux-thunk'

const rootReducer=combineReducers({
auth:authReducer
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk))