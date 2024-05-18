import { Button, Col, Input, Row } from 'reactstrap';
import bgLogin from '../../assets/images/bg.login.png';
import axios from 'axios';
import { useState } from 'react';
const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const handleChange = (event) => {
        const { value, name } = event.target;
        setState((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const fetchApi = (body) => {
        axios.post('https://api-car-rental.binaracademy.org/admin/auth/login', { ...body }).then(result => {
            console.log(result?.data?.role);
            if (result?.data?.role === 'Customer') {
                console.log('ERROR 404');
            }
            if (result?.data?.role === 'Admin') {
                localStorage.setItem("TOKEN", result?.data?.access_token);
                window.location.replace('/home');
            }
        }).catch(error => {
            console.log(error);
            // toast(error?.response?.data?.message, { position: 'top-right', type: 'error', theme: 'colored' });

        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchApi(state);
    }
    return (
        <Row className='d-flex justify-content-between'>
            <Col lg={8} style={{ width: 'auto', flex: 1, padding: 0 }}>
                <div>
                    <img style={{ width: '100%', backgroundSize: 'cover', height: '100vh', objectFit: 'none' }} src={bgLogin} />
                </div>
            </Col>
            <Col lg={4} style={{ padding: 0 }}>
                <div className='px-5 d-flex align-items-center' style={{ height: '100vh' }}>
                    <div style={{ flex: 1 }}>
                        <div className='mb-3' style={{ width: '100px', height: '34px', background: '#CFD4ED' }} />
                        <div className='mb-3' style={{ fontSize: 24, fontWeight: 700 }}>Welcome, Admin BCR</div>
                        <form onSubmit={handleSubmit}>
                            <div className='d-flex flex-column gap-2'>
                                <div>
                                    <label style={{ fontSize: 14, color: '#222222', marginBottom: 8 }}>Email</label>
                                    <Input
                                        name="email"
                                        onChange={handleChange}
                                        style={{ height: '3rem', fontSize: 14 }}
                                        placeholder='Contoh: johndee@gmail.com'
                                    />
                                </div>
                                <div>
                                    <label style={{ fontSize: 14, color: '#222222', marginBottom: 8 }}>Password</label>
                                    <Input
                                        onChange={handleChange}
                                        name="password"
                                        type="password"
                                        style={{ height: '3rem', fontSize: 14 }}
                                        placeholder='6+ karakter'
                                    />
                                </div>
                                <Button type='submit' className='btn' style={{ background: '#0D28A6', color: 'white' }}>Sign In</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Login;