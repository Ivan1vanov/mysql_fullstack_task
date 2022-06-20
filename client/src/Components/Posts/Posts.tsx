import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { getPostsAction } from '../../store/actions/postAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Post from './Post/Post';
import styles from './postsStyles.module.scss' 
import { Container } from 'react-bootstrap';
import { IPost } from '../../store/types/postTypes';
 
const Posts = () => {

    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(getPostsAction())
    }, [])

    const {posts}: {posts: IPost[]} = useTypedSelector(state => state.posts)
    console.log(posts)

  return (
    <Container className={styles.postsContainer}>
        {posts?.map((post: any, index: number) => (
            <Post key={index} post={post} />
        ))}
    </Container>
  )
}

export default Posts