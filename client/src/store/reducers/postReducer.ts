import { PostReducerTypes, POST_ACTION_TYPES, IPost } from '../types/postTypes';



const initializeState: {
    posts: IPost[],
    post: IPost | any
} = {
    posts: [],
    post: null
}

export const postReducer = (state = initializeState, action: PostReducerTypes) => {
    switch (action.type) {
        case POST_ACTION_TYPES.GET_POSTS:
            return {
                posts: action.payload
            }
            
        case POST_ACTION_TYPES.CREATE_POST:
            return {
                posts: [...state.posts, action.payload]
            }

        case POST_ACTION_TYPES.GET_ONE_POST:
            return {
                post: action.payload
            }
        default:
            return state
    }
}