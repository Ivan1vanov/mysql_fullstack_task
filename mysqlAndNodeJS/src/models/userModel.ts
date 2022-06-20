import connectDB from '../db';
import { DataTypes } from 'sequelize';

export interface UserInputData {
    userName: string,
    password: string
}

export interface IUser extends UserInputData {
    id: string | number,
    createdAt: Date,
    updatedAt: Date
}

export const User = connectDB.define('User', {
    userName: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false}
})

