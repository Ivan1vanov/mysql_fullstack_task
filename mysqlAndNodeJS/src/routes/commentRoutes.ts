import {Router, Request, Response} from 'express'
import commentController from '../controllers/commentController'

const commentRouters = Router()

commentRouters.post('/:id', commentController.createComment)
commentRouters.get('/:postId', commentController.getPostComments)

export default commentRouters