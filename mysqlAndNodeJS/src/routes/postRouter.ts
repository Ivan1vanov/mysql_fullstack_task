import {Router, Request, Response} from 'express'
import postControllers from '../controllers/postControllers'
import { isAuth } from '../midleware/isAuth';
import { isLike } from '../midleware/isLike';

const postRouters = Router()

postRouters.get('/', postControllers.getAllposts)
postRouters.get('/one/:id', postControllers.getOnePost)

postRouters.post('/', postControllers.createPost)
postRouters.post('/like/:id', isAuth, postControllers.likePost)
postRouters.get('/like/:id', isLike, postControllers.getPostLikes)


export default postRouters