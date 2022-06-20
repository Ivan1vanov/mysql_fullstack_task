import { Request, Response } from "express";
import { Comments, CommnetInputData } from '../models/comments';


class CommentControllers {
    async createComment(req: Request, res: Response) {
        
        const comment: CommnetInputData = req.body 
        const {id} = req.params
        
        try {
            const newComment = await Comments.create({
                commentBody: comment.commentBody,
                author: comment.author,
                PostId: id
            })

            await newComment.save()

            res.status(202).send({
                comment: newComment
            })
        } catch (error) {
            console.log(error)
        } 
    }

    async getPostComments(req: Request, res: Response) {
        
        const {postId} = req.params
        
        try {
            
            const comments = await Comments.findAll({where: {
                PostId: postId
            }})

            res.status(202).send({
                comments
            })

        } catch (error) {
            console.log(error)
        }
    }

}

export default new CommentControllers()