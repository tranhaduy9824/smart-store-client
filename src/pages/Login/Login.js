import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import images from '~/assets/images';
import BoxInput from '~/components/BoxInput';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import WrapperNullLayout from '../Components/WrapperNullLayout';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const refContainer = useRef();
    const navigate = useNavigate(null);

    const handleLogin = () => {};

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
                navigate('/signup');
            }, 500);
        }
    };

    return (
        <WrapperNullLayout>
            <div ref={refContainer} className={cx('wrapper')}>
                <div className={cx('box-content')}>
                    <div className={cx('background-login')}>
                        <img src={images.login_image} alt="Background login" />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('box-login')}>
                            <p className={cx('title')}>Login</p>
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
                            <div className={cx('remember-me')}>
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <label htmlFor="rememberMe">Remember Me</label>
                            </div>
                            <div className={cx('forgot-password')}>
                                <NavLink to="/forgot-passsword">Forgot Password?</NavLink>
                            </div>
                            <Button onClick={handleLogin}>Login</Button>
                            <div className={cx('line-or')}>
                                <hr />
                                <span>Or</span>
                                <hr />
                            </div>
                            <div className={cx('login-outside')}>
                                <div className={cx('fb-icon')}>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </div>
                                <div className={cx('gg-icon')}>
                                    <FontAwesomeIcon icon={faGoogle} />
                                </div>
                            </div>
                            <div className={cx('to-signup')}>
                                <p>Don't have an account? <NavLink onClick={handleNavLinkClick} to="/signup" className={cx('signup')}>Sign Up</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WrapperNullLayout>
    );
}

export default Login;
