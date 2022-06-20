import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { createPostAction } from '../../store/actions/postAction';

const FormPost = () => {

    const dispatch: any = useDispatch()

    const userInfo = localStorage.getItem('profile')
    const user = userInfo !== null ? JSON.parse(userInfo).user : 'some id'

    const [postData, setPostData] = useState({
        title: '',
        postText: '',
        author: user.id
    })

    const onChangePost = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        })
    }

    const createPostHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(postData)
        dispatch(createPostAction(postData))

    }

  return (
    <div>
        <h2>Create post</h2>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control onChange={onChangePost} name='title' type="text" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Text</Form.Label>
    <Form.Control onChange={onChangePost} name='postText' type="text" placeholder="Password" />
  </Form.Group>
  <Button onClick={createPostHandler} variant="primary" type="submit">
    Create
  </Button>
</Form>
    </div>
  )
}

export default FormPost