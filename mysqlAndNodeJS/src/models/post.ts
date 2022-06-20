import connectDB from '../db';
import {DataTypes, Model} from 'sequelize'
import { Comments } from './comments';
import { Like } from './likeModel';


export interface IPostInput {
    title: string,
    postText: string,
    author: string,
}

export interface IPost extends IPostInput {
    createdAt: Date,
    updatedAt: Date,
    id: number | string
}

export const Post = connectDB.define('Posts', {
    title: {type: DataTypes.STRING, allowNull: false},
    postText: {type: DataTypes.STRING, allowNull: false},
    author: {type: DataTypes.STRING, allowNull: false},
}) 


Post.hasMany(Comments, {
    onDelete: 'cascade'
})
Comments.belongsTo(Post)

Post.hasMany(Like, {
    onDelete: 'cascade'
})
Like.belongsTo(Post)