import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Signup.module.scss';

import images from '~/assets/images';
import BoxInput from '~/components/BoxInput';
import Button from '~/components/Button';
import WrapperNullLayout from '../Components/WrapperNullLayout';

const cx = classNames.bind(styles);

function Signup() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const refContainer = useRef();
    const navigate = useNavigate(null);

    const handleSignUp = () => {};

    useEffect(() => {
        if (refContainer.current) {
            refContainer.current.classList.add(cx('slide-in'));
        }

        return () => {
            if (refContainer.current) {
                refContainer.current.classList.remove(cx('slide-in'));
            }
        };
    }, []);

    const handleNavLinkClick = (e) => {
        e.preventDefault();
        if (refContainer.current) {
            refContainer.current.classList.add(cx('slide-out'));
            setTimeout(() => {
                navigate('/login');
            }, 400);
        }
    };

    return (
        <WrapperNullLayout>
            <div ref={refContainer} className={cx('wrapper')}>
                <div className={cx('box-content')}>
                    <div className={cx('content')}>
                        <div className={cx('box-signup')}>
                            <p className={cx('title')}>Sign Up</p>
                            <BoxInput
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                label="Fullname"
                                className={cx('input')}
                            />
                            <BoxInput
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                label="Email"
                                className={cx('input')}
                                email
                            />
                            <BoxInput
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label="Password"
                                className={cx('input')}
                                isPassword
                            />
                            <BoxInput
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                label="Password"
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
        </WrapperNullLayout>
    );
}

export default Signup;
