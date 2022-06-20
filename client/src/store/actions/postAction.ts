import {Dispatch} from 'redux'
import * as api from '../../api/api'
import { POST_ACTION_TYPES } from '../types/postTypes';

export const getPostsAction = () => async (dispatch: Dispatch) => {
    try {
        const {data} = await api.getPoststAPI()
        console.log(data)
        dispatch({type: POST_ACTION_TYPES.GET_POSTS, payload: data.posts})
    } catch (error) {
        console.log(error)
    }
}

export const createPostAction = (postData: any) => async (dispatch: Dispatch) => {
    try {
        console.log('data: ', postData)
        const {data} = await api.createPostAPI(postData)
        dispatch({type: POST_ACTION_TYPES.CREATE_POST, payload: data.post})
    } catch (error) {
        console.log(error)
    }
}

export const getOnePostAction = (postPk: string | undefined) => async (dispatch: Dispatch) => {
    try {
        const {data} = await api.getOnePostAPI(postPk)
        dispatch({type: POST_ACTION_TYPES.GET_ONE_POST, payload: data.post})
    } catch (error) {
        console.log(error)
    }
}

export const likePostAction = (id: number) =>  async (dispatch: Dispatch) => {
    try {
        const {data} = await api.likePostAPI(id)
    } catch (error) {
        console.log(error)
    }
}