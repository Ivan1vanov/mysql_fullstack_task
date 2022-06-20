import { Request, Response } from "express";
import { UserInputData, User, IUser } from '../models/userModel';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const jwtTokenGenerator = (id: string | number):string => {
    return jwt.sign({id}, 'jwtConfig', {expiresIn: '24h'})
}

class UserControllers {

    async register(req: Request, res: Response) {

        const userData: UserInputData = req.body

        try {
            
            const isUserExist = await User.findOne({where: {
                userName: userData.userName
            }}) 

            if(isUserExist) {
                res.status(404).send({
                    message: 'User already exists'
                })
            } else {

                const hashPassword = bcrypt.hashSync(userData.password, 6)

                const newUser: any = await User.create({
                    userName: userData.userName,
                    password: hashPassword
                })
                await newUser.save()
                const token = await jwtTokenGenerator(newUser.id)

                res.status(202).send({
                    user: newUser,
                    token: token
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    async login(req: Request, res: Response) {

        const userData: UserInputData = req.body

        try {
            
            const isUserExist: any = await User.findOne({where: {
                userName: userData.userName
            }}) 

            if(!isUserExist) {
                res.status(404).send({
                    message: 'User does not exists'
                })
            } else {

                const isPassword = bcrypt.compareSync(userData.password, isUserExist.password)

                if(isPassword) {
                    const token = await jwtTokenGenerator(isUserExist.id)

                    res.status(202).send({
                        user: isUserExist,
                        token: token
                    })
                } else {
                    res.status(404).send({
                        message: 'Invalid credentials'
                    })
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

}

export default new UserControllers()