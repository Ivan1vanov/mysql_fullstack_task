import { Dispatch } from 'redux';
import * as api from '../../api/api'
import { COMMENT_TYPE_ACTION } from '../types/commentType';



export const getCommentsAction = (id: string | undefined) => async (dispatch: Dispatch) => {
    try {
        
        const {data} = await api.getCommentsAPI(id)
        dispatch({type: COMMENT_TYPE_ACTION.GET_COMMENTS, payload: data.comments})

    } catch (error) {
        console.log(error)
    }
}

export const createCommentAction = (commentData: any, id: string | undefined) => async (dispatch: Dispatch) => {
    try {
        
        const {data} = await api.createCommentAPI(commentData, id)
        dispatch({type: COMMENT_TYPE_ACTION.CREATE_COMMENT, payload: data.comment})

    } catch (error) {
        console.log(error)
    }
}