import jwt from 'jsonwebtoken'
import {Request, Response, NextFunction} from 'express'

export const isAuth = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(token) {
            const decodedData: any = jwt.verify(token, 'jwtConfig')
            req.userId = decodedData.id

            next()
            
        } else {
            res.status(404).send({
                message: 'Unauthenticated'
            })
        }
    } catch (error) {
        console.log(error)
    }
}