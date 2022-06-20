import {Express} from 'express'
import postRouters from './postRouter';
import commentRouters from './commentRoutes';
import userRoutes from './userRoutes';

const mainRouter = (app: Express) => {

    app.use('/api/posts/', postRouters)
    app.use('/api/comment/', commentRouters)
    app.use('/api/user/', userRoutes)
}

export default mainRouter