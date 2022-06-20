import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getCommentsAction, createCommentAction } from '../../store/actions/commentAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IComment } from '../../store/types/commentType';

interface ICommentsProps {
    postId: string | undefined
}

const Comments: React.FC<ICommentsProps> = ({postId}) => {

    const [commentData, setCommentData] = useState({
        commentBody: "",
        author: "Some author ID",
    })
    const dispatch: any = useDispatch()

    const {comments}: {comments: IComment[]} = useTypedSelector(state => state.comments)
    console.log(comments)
    useEffect(() => {
        console.log('getComments')
        dispatch(getCommentsAction(postId))

    }, [postId])

    const createCommentHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(commentData)
        console.log(postId)
        dispatch(createCommentAction(commentData, postId))
    }

  return (
    <div>

<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Comment</Form.Label>
    <Form.Control onChange={(e) => setCommentData({...commentData, commentBody: e.target.value})} 
    name='title' type="text" placeholder="Enter email" 
    />
  </Form.Group>
  <Button variant='primary' onClick={createCommentHandler}>
    Add comment
  </Button>

    {comments?.map((comment: IComment, index: number) => (
     <Card key={index}>
     <Card.Header>{comment.createdAt.split('T')[0]}</Card.Header>
     <Card.Body>
       <Card.Title>{comment.author}</Card.Title>
       <Card.Text>
        {comment.commentBody}
       </Card.Text>
     </Card.Body>
   </Card>
    ))}

   
    </div>
  )
}

export default Comments