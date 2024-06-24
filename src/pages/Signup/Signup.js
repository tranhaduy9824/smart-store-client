import { hideAlert, showAlert } from '~/redux/actions/alert';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './Signup.module.scss';

import images from '~/assets/images';
import BoxInput from '~/components/BoxInput';
import Button from '~/components/Button';
import WrapperAnimation from '~/components/WrapperAnimation';
import { hideLoading, showLoading } from '~/redux/actions/loading';

const cx = classNames.bind(styles);

function Signup() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(true);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(null);

    const handleNavLinkClick = (e) => {
        setShow(false);
        e.preventDefault();
        setTimeout(() => {
            navigate('/login', { state: { animation: 'inFromRight' } });
        }, 500);
    };

    function isValidEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    const handleValidation = () => {
        if (!fullname.trim()) {
            dispatch(showAlert("Vui lòng nhập họ và tên."))
            return false;
        }

        if (!email.trim() || !isValidEmail(email)) {
            dispatch(showAlert('Vui lòng nhập email hợp lệ.'))
            return false;
        }

        if (password.length < 8) {
            dispatch(showAlert('Vui lòng nhập mật khẩu có ít nhất 8 ký tự.'))
            return false;
        }

        if (password !== confirmPassword) {
            dispatch(showAlert('Mật khẩu không khớp!'));
            return false;
        }

        return true;
    }

    const handleSignUp = async () => {

        const userData = {
            fullname,
            email,
            password,
        };

        try {
            if (handleValidation()) {
                dispatch(showLoading())
                await axios.post('/users/signup', userData);
                dispatch(hideLoading())
                dispatch(showAlert('Đăng ký thành công!'));
                setTimeout(() => {
                    dispatch(hideAlert());
                    setShow(false);
                    setTimeout(() => {
                        navigate('/login', { state: { animation: 'inFromRight' } });
                    }, 500);
                }, 1000);
            }
        } catch (error) {
            dispatch(hideLoading())
            if (error.response && error.response.status === 409) {
                dispatch(showAlert('Mail exists!'));
            } else {
                dispatch(showAlert('Điền đầy đủ thông tin!'));
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSignUp();
        }
    };

    return (
        <WrapperAnimation inFromLeft outToLeft show={show} className={cx('wrapper-animation')}>
            <div className={cx('wrapper')}>
                <div className={cx('box-content')}>
                    <div className={cx('content')}>
                        <div className={cx('box-signup')}>
                            <p className={cx('title')}>Đăng ký</p>
                            <BoxInput
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e)}
                                label="Họ và tên"
                                className={cx('input')}
                            />
                            <BoxInput
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e)}
                                label="Email"
                                className={cx('input')}
                                email
                            />
                            <BoxInput
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e)}
                                label="Mật khẩu"
                                className={cx('input')}
                                isPassword
                            />
                            <BoxInput
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e)}
                                label="Xác nhận mật khẩu"
                                className={cx('input')}
                                isPassword
                            />
                            <Button onClick={handleSignUp}>Đăng ký</Button>
                            <div className={cx('to-login')}>
                                <p>
                                    Bạn đã có tài khoản?{' '}
                                    <NavLink onClick={handleNavLinkClick} to="/login" className={cx('login')}>
                                        Đăng nhập
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('background-signup')}>
                        <img src={images.signup_image} alt="Background signup" />
                    </div>
                </div>
            </div>
        </WrapperAnimation>
    );
}

export default Signup;
