

export enum USER_ACTION_TYPES {
    AUTH='AUTH',
}


interface Auth_User {
    type: USER_ACTION_TYPES.AUTH,
    payload: any
}


export type UserRegucerTypes = Auth_User