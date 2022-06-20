import { UserRegucerTypes, USER_ACTION_TYPES } from '../types/userTypes';




const initializeState = {
    user: null
}

export const userReducer = (state = initializeState, action: UserRegucerTypes) => {
    switch (action.type) {
        case USER_ACTION_TYPES.AUTH:
            localStorage.setItem('profile', JSON.stringify(action.payload))
        return {
            user: action.payload
        }
        default:
            return state
    }
}