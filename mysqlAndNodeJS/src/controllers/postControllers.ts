import {Request, Response} from 'express'
import { Like } from '../models/likeModel';
import { IPostInput, Post, IPost } from '../models/post';

class PostControllers {

    async getAllposts(req: Request, res: Response) {
        try {
            
            const posts = await Post.findAll()

            res.status(202).send({
                posts
            })
    

        } catch (error) {
            console.log(error)
        }
    }

    async createPost(req: Request, res: Response) {
        
        const postData: IPostInput = req.body

        try {
            
            const newPost = await Post.create({
                title: postData.title,
                postText: postData.postText,
                author: postData.author
            })

            await newPost.save()

            res.status(202).send({
                post: newPost
            })

        } catch (error) {
            console.log(error)
        }
    }

    async getOnePost(req: Request, res: Response) {
        
        const {id} = req.params
        
        try {
            
            const post = await Post.findByPk(id)

            res.status(202).send({
                post: post
            })

        } catch (error) {
            console.log(error)
        }
    }

    async likePost(req: Request | any, res: Response) {
        const {id} = req.params
        const userId = req.userId
        try {


            const isLiked = await Like.findOne({where: {
                postId: id,
                userId: userId
            }})

            if(isLiked) {
                await isLiked.destroy()
                res.status(202).send({
                    newLike: false
                })
            } else {
                const newLike = await Like.create({
                    userId: userId,
                    PostId: id
                })
                await newLike.save()
                res.status(202).send({
                    newLike: true
                })
            }

          
            
        } catch (error) {
            console.log(error)
        }
    }


    async getPostLikes(req: Request | any, res: Response) {

        const {id} = req.params
        const userId = req.userId

        try {

            const likes = await Like.count({where: {
                PostId: id
            }})

            if (userId) {
                const isLiked = await Like.findOne({where: {
                    PostId: id,
                    userId: userId
                }})
    
                if(isLiked) {
                    res.status(202).send({
                        likes: likes,
                        isLiked: true
                    })
                } else {
                    res.status(202).send({
                        likes: likes,
                        isLiked: false
                    })
                }
            } else {
                res.status(202).send({
                    likes: likes,
                    isLiked: false
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

}

export default new PostControllers()