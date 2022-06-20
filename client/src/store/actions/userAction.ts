import { Dispatch } from 'redux';
import * as api from '../../api/api'
import { USER_ACTION_TYPES } from '../types/userTypes';


export const registerAction = (userData: any) => async (dispatch: Dispatch) => {
    try {
        
        const {data} = await api.registerAPI(userData)
        console.log(data)
        dispatch({type: USER_ACTION_TYPES.AUTH, payload: data})

    } catch (error) {
        console.log(error)
    }
}

export const loginAction = (userData: any) => async (dispatch: Dispatch) => {
    try {
        
        const {data} = await api.loginAPI(userData)
        console.log(data)
        dispatch({type: USER_ACTION_TYPES.AUTH, payload: data})

    } catch (error) {
        console.log(error)
    }
}