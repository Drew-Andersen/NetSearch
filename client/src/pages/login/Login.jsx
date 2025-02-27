import { Form, Button, Alert } from 'react-bootstrap';
import './login.css';

export default function Login() {
    return (
        <>
            <div className='outer-div'>
                <h1 className='title-of-page'>Login</h1>
                <Form>
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
                            className='btn btn-success rounded'
                        >
                            Login
                        </Button>
                    </div>

                    <div className="text-center">
                        <p>Don't have an account?</p>
                        {/* <Link to='/signup' className="btn btn-primary border w-100 rounded text-decoration-none"> */}
                            <Button>Sign-up</Button>
                        {/* </Link> */}
                    </div>
                </Form>
            </div>
        </>
    )
}