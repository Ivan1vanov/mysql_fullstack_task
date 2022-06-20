import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '../../hooks/useQuery'
import { useDispatch } from 'react-redux';
import { getOnePostAction } from '../../store/actions/postAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IPost } from '../../store/types/postTypes';
import Comments from '../../Components/Comments/Comments';

const PostPage = () => {

    const {id} = useParams()
    const dispatch: any = useDispatch()
        console.log(id)

    const {post}: {post: IPost | undefined} = useTypedSelector(state => state.posts)
    console.log(post)
    useEffect(() => {
        console.log('get one')
        dispatch(getOnePostAction(id))
    }, [])

  return (
    <div>This is post whit name <h2>{post?.title}</h2>
    
    <div>
        <Comments postId={id}/>
    </div>
    </div>
  )
}

export default PostPage