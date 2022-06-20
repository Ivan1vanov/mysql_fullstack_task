import connectDB from '../db';
import { DataTypes } from 'sequelize';




export const Like = connectDB.define('Like', {
    userId: {type: DataTypes.STRING}
})

