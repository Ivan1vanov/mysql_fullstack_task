import { CommentReducerTypes, COMMENT_TYPE_ACTION } from '../types/commentType';

const initializeState = {
    comments: []
}

export const commentReducer = (state = initializeState, action: CommentReducerTypes) => {
    switch (action.type) {
        case COMMENT_TYPE_ACTION.GET_COMMENTS:
          return {
            comments: action.payload
          }
          
        case COMMENT_TYPE_ACTION.CREATE_COMMENT:
            return {
                comments: [...state.comments, action.payload]
            }

        default:
            return state
    }
}