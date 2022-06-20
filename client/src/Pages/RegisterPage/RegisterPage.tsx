import React, {useState} from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginAction, registerAction } from '../../store/actions/userAction';

const RegisterPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const dispatch: any = useDispatch()

    const [userData, setUserData] = useState({
        userName: '',
        password: ''
    })

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }


    const authHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(isLogin) {
            dispatch(loginAction(userData))
        } else {
            dispatch(registerAction(userData))
        }
    }

  return (
    <Container>
        {isLogin ? (
            <Form>
                <h2>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User name</Form.Label>
              <Form.Control onChange={onChangeHandler} type="text" placeholder="Enter email" name='userName'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={onChangeHandler} type="password" placeholder="Password" name='password'/>
            </Form.Group>
            <Button onClick={authHandler} variant="primary" type="submit">
              Login
            </Button>
            <div>Do not have an account? - <Button onClick={() => setIsLogin(false)} >Register</Button></div>
          </Form>
        ) : (
            <Form>
            <h2>Register</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control onChange={onChangeHandler} type="text" placeholder="Enter email" name='userName'/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={onChangeHandler} type="password" placeholder="Password" name='password'/>
        </Form.Group>
        <Button onClick={authHandler} variant="primary" type="submit">
          Register
        </Button>
        <div>Allready have an account? - <Button onClick={() => setIsLogin(true)} >Login</Button></div>
      </Form>
        )}
        
    </Container>
  )
}

export default RegisterPage