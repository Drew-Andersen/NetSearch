import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './register.css';

export default function Register() {
    return (
        <>
            <div className='outer-div'>
                <h1 className='title-of-page'>Sign Up</h1>
                <div className="form-div">
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                <strong>Username</strong>
                            </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your username'
                                name='username'
                                className='form-control'
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                <strong>Email</strong>
                            </Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter your email'
                                name='email'
                                className='form-control'
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                <strong>Password</strong>
                            </Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Enter yuor password'
                                name='password'
                                className='form-control'
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                        </Form.Group>

                        <div>
                            <Button
                                type='submit'
                                className='login-btn btn btn-success rounded'
                            >
                                Sign Up
                            </Button>
                        </div>

                        <div className="text-center">
                            <p>Already have an account?</p>
                            <Link to='/login'>
                                <Button>Login</Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}