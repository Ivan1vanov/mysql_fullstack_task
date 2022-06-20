
export enum COMMENT_TYPE_ACTION {
    GET_COMMENTS='GET_COMMENTS',
    CREATE_COMMENT='CREATE_COMMENT'
}

export interface IComment {
    id: number,
    commentBody: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    PostId: number
}

interface Get_Comments {
    type: COMMENT_TYPE_ACTION.GET_COMMENTS,
    payload: IComment[] | IComment
}

interface Create_Comment {
    type: COMMENT_TYPE_ACTION.CREATE_COMMENT,
    payload: IComment
}

export type CommentReducerTypes = Get_Comments | Create_Comment