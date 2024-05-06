import {applyMiddleware,combineReducers,legacy_createStore,compose} from 'redux';
import {thunk} from 'redux-thunk'
import { authReducer } from './Auth/auth.reducer';
import { postReducer } from './Post/post.reducer';
import { messageReducer } from './Message/message.reducer';
import reelReducer from './Reel/reel.reducer';
import storyReducer from './Story/story.reducer';

const rootReducers=combineReducers({
auth:authReducer,
post:postReducer,
message:messageReducer,
reel:reelReducer,
story:storyReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=legacy_createStore(rootReducers,composeEnhancers(applyMiddleware(thunk)))