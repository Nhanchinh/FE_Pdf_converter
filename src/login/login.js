import React, { useState } from 'react';
import './login.scss'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'; // Thêm import

function Login({ onLogin }) {
    const [email, setEmail] = useState(''); // Trạng thái cho email
    const [password, setPassword] = useState(''); // Trạng thái cho mật khẩu
    const [error, setError] = useState(''); // Trạng thái cho thông báo lỗi
    const navigate = useNavigate(); // Khởi tạo useNavigate

    const handleSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn mặc định khi gửi form

        // Kiểm tra thông tin đăng nhập
        if (email === 'admin@example.com' && password === 'password123') {
            console.log('Đăng nhập thành công!');
            localStorage.setItem('isLoggedIn', 'true'); // Lưu trạng thái đăng nhập
            navigate('/home'); // Điều hướng đến trang chính hoặc trang nào bạn muốn
            onLogin();
        } else {
            setError('Tên đăng nhập hoặc mật khẩu không chính xác'); // Cập nhật thông báo lỗi
        }
    };

    return (
        <MDBContainer fluid>
            <MDBRow className='justify-content-center'>
                <MDBCol sm='6'>
                    <div className='d-flex flex-row ps-5 pt-5'>
                        {/* <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} /> */}
                        <span className="h1 fw-bold mb-0">PDF converter</span>
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
                                onChange={(e) => setEmail(e.target.value)} // Cập nhật trạng thái email
                            />
                            <MDBInput
                                wrapperClass='mb-4 mx-5 w-100'
                                label='Password'
                                id='formControlLg'
                                type='password'
                                size="lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Cập nhật trạng thái mật khẩu
                            />

                            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' type="submit">Login</MDBBtn>
                        </form>

                        {error && <p className="text-danger">{error}</p>} {/* Hiển thị thông báo lỗi nếu có */}

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
    );
}

export default Login;
