import React, { useEffect, useState } from 'react'
import { IPost } from '../../../store/types/postTypes';
import {Button, Card} from 'react-bootstrap'
import styles from './post.module.scss'
import { Link } from 'react-router-dom';

import {AiOutlineHeart} from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { likePostAction } from '../../../store/actions/postAction';
import { getLikesAPI, likePostAPI } from '../../../api/api';


interface IPostProps {
    post: IPost
}

const Post: React.FC<IPostProps> = ({post}) => {

  const dispatch: any = useDispatch()

  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
      const getLikesEff = async() => {
        console.log('sada')
        const {data}: {data: any} = await getLikesAPI(post.id)
        setLikes(data.likes)
        setIsLiked(data.isLiked)
        console.log(data)
      }
      getLikesEff()
  }, [])

  const likePostHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const {data} = await likePostAPI(post.id)
    console.log(data)
    if(data.newLike === true) {
      setLikes(likes + 1)
      setIsLiked(true)
    } else {
      setLikes(likes - 1)
      setIsLiked(false)
    }
  }

  return (
    <Card className={styles.postCard} style={{ width: '18rem'}}>
  <Card.Body>
    <Link to={`/post/${post.id}`}>
    <Card.Title>{post.title}</Card.Title>
    </Link>
    <Card.Subtitle className="mb-2 text-muted">{post.createdAt.split('T')[0]}</Card.Subtitle>
    <Card.Text>
      {post.postText}
    </Card.Text>
    <Card.Link href="#">{post.author}</Card.Link>
    <Button onClick={likePostHandler} variant={isLiked ? 'primary' : 'light'}>
      {likes && likes}
      <AiOutlineHeart/>
      </Button>
    
  </Card.Body>
</Card>
  )
}

export default Post