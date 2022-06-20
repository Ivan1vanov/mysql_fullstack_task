import {combineReducers, createStore, applyMiddleware, compose} from 'redux' 
import thunk from 'redux-thunk'
import { postReducer } from './reducers/postReducer';
import { commentReducer } from './reducers/commentReducer';
import { userReducer } from './reducers/userReducer';

const reducers = combineReducers({
    posts: postReducer,
    comments: commentReducer,
    user: userReducer
})

export const store = createStore(reducers, applyMiddleware(compose(thunk)))

export type rootState = ReturnType<typeof reducers>