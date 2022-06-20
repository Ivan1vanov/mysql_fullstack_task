import jwt from 'jsonwebtoken'
import {Request, Response, NextFunction} from 'express'

export const isLike = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(token) {
            const decodedData: any = jwt.verify(token, 'jwtConfig')
            req.userId = decodedData.id

            next()
            
        } else {
            next()
        }
    } catch (error) {
        console.log(error)
    }
}