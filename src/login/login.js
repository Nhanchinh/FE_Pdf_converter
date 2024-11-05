import React, { useState } from 'react';
import logoLogin from "../assets/logoLogin2.png"
import './login.scss';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin, onGuestLogin }) { // Thêm onGuestLogin prop
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === 'admin@example.com' && password === 'password123') {
            console.log('Đăng nhập thành công!');
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/home');
            onLogin();
        } else {
            setError('Tên đăng nhập hoặc mật khẩu không chính xác');
        }
    };

    const handleGuestLogin = () => {
        onGuestLogin(); // Kích hoạt chế độ đăng nhập khách
        navigate('/home'); // Điều hướng đến trang chủ
    };

    return (
        <div style={{ display: 'flex', alignItems: "center", height: '100vh' }}>



            <MDBContainer fluid>
                <MDBRow className='justify-content-center'>
                    <MDBCol sm='6'>
                        <div className='d-flex flex-row ps-5 pt-5'>
                            <span style={{ marginLeft: '-4px' }} className="h1 fw-bold mb-0"><img src={logoLogin}></img></span>
                        </div>

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>

                            <form onSubmit={handleSubmit}>
                                <MDBInput
                                    wrapperClass='mb-4 mx-5 w-100'
                                    label='Email address'
                                    id='formControlLg'
                                    type='email'
                                    size="lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <MDBInput
                                    wrapperClass='mb-4 mx-5 w-100'
                                    label='Password'
                                    id='formControlLg'
                                    type='password'
                                    size="lg"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' type="submit">
                                    Login
                                </MDBBtn>
                            </form>

                            {error && <p className="text-danger text-center">{error}</p>}

                            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='secondary' size='lg' onClick={handleGuestLogin}>
                                Access as Guest
                            </MDBBtn>

                            <p className="small mb-5 pb-lg-3 ms-5">
                                <a className="text-muted" href="#!">Forgot password?</a>
                            </p>
                            <p className='ms-5'>
                                Don't have an account? <a href="#!" className="link-info">Register here</a>
                            </p>
                        </div>
                    </MDBCol>

                    <MDBCol sm='2' className='d-none d-sm-block px-0 mt-5 d-flex align-items-center'>
                        <img src="https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-Hoc-Vien-Ky-Thuat-Mat-Ma-ACTVN.png"
                            alt="Login image" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </div>
    );
}

export default Login;
