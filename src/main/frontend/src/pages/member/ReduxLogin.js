import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../modules/user';

import Layout from '../../components/layout/Layout';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';

const ReduxLogin = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setMessage('Loading...');

        let body = {
            email: email,
            password: password,
        };

        try {
            dispatch(loginUser(body));

            alert('로그인 완료');
            navigate('/');
        } catch (error) {
            console.error(error);

            alert('로그인 실패');
        }
    };

    const backToHome = () => {
        navigate('/');
    };

  return (
    <Layout>
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        value={ email }
                        onChange= { onChangeEmail }
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="password"
                        value={ password }
                        onChange= { onChangePassword }
                    />
                </Form.Group>

                <Button variant="primary" onClick={ onSubmit }>로그인</Button>
                <Button variant="primary" onClick={ backToHome }>뒤로가기</Button>
            </Form>
        </Container>
    </Layout>
  );
};

export default ReduxLogin;