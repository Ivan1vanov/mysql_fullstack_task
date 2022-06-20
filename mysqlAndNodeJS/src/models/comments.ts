import connectDB from '../db';
import { DataTypes } from 'sequelize';

export interface CommnetInputData {
    commentBody: string,
    author: string,
    postId: number | string
}



export const Comments = connectDB.define('comments', {
    commentBody: {type: DataTypes.STRING},
    author: {type: DataTypes.STRING}
})