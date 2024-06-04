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
import WrapperNullLayout from '../Components/WrapperNullLayout';
import WrapperAnimation from '~/components/WrapperAnimation';

const cx = classNames.bind(styles);

function Signup() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(true)
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(null);

    const handleNavLinkClick = (e) => {
        setShow(false)
        e.preventDefault();
        setTimeout(() => {
            navigate('/login');
        }, 500);
    };

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            dispatch(showAlert('Passwords do not match!'));
            return;
        }

        const userData = {
            fullname,
            email,
            password
        };

        try {
            await axios.post('/users/signup', userData);
            dispatch(showAlert('Signup successful!'));
            setTimeout(() => {
                dispatch(hideAlert())
                setShow(false)
                setTimeout(() => {
                    navigate('/login');
                }, 500);
            }, 1000)
        } catch (error) {
            if (error.response && error.response.status === 409) {
                dispatch(showAlert('Mail exists!'));
            } else {
                dispatch(showAlert('Fill full the information!'));
            } 
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSignUp();
        }
    };

    return (
        <WrapperNullLayout>
            <WrapperAnimation inFromLeft outToLeft show={show} className={cx('wrapper-animation')}>
                <div className={cx('wrapper')}>
                    <div className={cx('box-content')}>
                        <div className={cx('content')}>
                            <div className={cx('box-signup')}>
                                <p className={cx('title')}>Sign Up</p>
                                <BoxInput
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                    onKeyPress={(e) => handleKeyPress(e)}
                                    label="Fullname"
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
                                    label="Password"
                                    className={cx('input')}
                                    isPassword
                                />
                                <BoxInput
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    onKeyPress={(e) => handleKeyPress(e)}
                                    label="Confirm Password"
                                    className={cx('input')}
                                    isPassword
                                />
                                <Button onClick={handleSignUp}>Sign Up</Button>
                                <div className={cx('to-login')}>
                                    <p>Already have an account? <NavLink onClick={handleNavLinkClick} to="/login" className={cx('login')}>Login</NavLink></p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('background-signup')}>
                            <img src={images.signup_image} alt="Background signup" />
                        </div>
                    </div>
                </div>
            </WrapperAnimation>
        </WrapperNullLayout>
    );
}

export default Signup;
