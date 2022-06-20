
export enum POST_ACTION_TYPES {
    GET_POSTS = 'GET_POSTS',
    CREATE_POST='CREATE_POST',
    GET_ONE_POST = 'GET_ONE_POST',
    GET_COMMENTS='GET_COMMENTS',
    CREATE_COMMENT='CREATE_COMMENT'
}

export interface IPost {
    id: number,
    title: string,
    author: string,
    postText: string,
    createdAt: string,
    updatedAt: Date
}


interface Get_Posts {
    type: POST_ACTION_TYPES.GET_POSTS,
    payload: any
}

interface Create_Post {
    type: POST_ACTION_TYPES.CREATE_POST,
    payload: IPost
}

interface Get_One_Post {
    type: POST_ACTION_TYPES.GET_ONE_POST,
    payload: IPost
}



export type PostReducerTypes = Get_Posts | Create_Post | Get_One_Post