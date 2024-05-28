import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import images from '~/assets/images';
import BoxInput from '~/components/BoxInput';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import WrapperNullLayout from '../Components/WrapperNullLayout';
import Alert from '~/components/Alert';
import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertContent, setAlertContent] = useState("");
    const [inputFocused, setInputFocused] = useState(false);
    const refWrapper = useRef();
    const navigate = useNavigate(null);
    const secretKey = process.env.REACT_APP_SECRET_KEY;
    const facebookId = process.env.REACT_APP_FACEBOOK_APP_ID;
    const googleId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const navigateHome = () => {
        setTimeout(() => {
            setShowAlert(false)
            if (!showAlert) {
                if (refWrapper.current) {
                    refWrapper.current.classList.add(cx('slide-hidden'));
                    setTimeout(() => {
                        navigate('/');
                    }, 500);
                }
            } 
        }, 1000)
    }

    const handleLogin = async () => {
        if (!email || !password) {
            setAlertContent("Email and password are required.")
            setShowAlert(true)
            return
        }

        const authData = {
            email,
            password
        }

        try {
            const response = await axios.post("/users/login", authData);
            sessionStorage.setItem('token', response.data.token);

            if (rememberMe) {
                const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString()
                localStorage.setItem('rememberedEmail', email);
                localStorage.setItem('rememberedPassword', encryptedPassword);
            } else {
                localStorage.removeItem('rememberedEmail');
                localStorage.removeItem('rememberedPassword')
            }

            setAlertContent("Login successful!")
            setShowAlert(true)
            navigateHome()
        } catch (error) {
            setAlertContent("Email or password is incorrect.")
            setShowAlert(true);
        }
    };

    const handleLoginFacebook = async (data) => {
        const { name, email } = data
        
        const fbUserData = {
            email,
            name
        }

        try {
            const response = await axios.post("/users/facebook-login", fbUserData);
            sessionStorage.setItem('token', response.data.token)

            setAlertContent("Login successful!")
            setShowAlert(true)
            navigateHome()
        } catch (error) {
            setAlertContent(error.toString())
            setShowAlert(true)
        }
    }

    const handleLoginGoogle = async (data) => {
        const { name, email } = data
        
        const ggUserData = {
            email,
            name
        }

        console.log(ggUserData);

        try {
            const response = await axios.post("/users/google-login", ggUserData);
            sessionStorage.setItem('token', response.data.token)

            setAlertContent("Login successful!")
            setShowAlert(true)
            navigateHome()
        } catch (error) {
            setAlertContent(error.toString())
            setShowAlert(true)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };    

    useEffect(() => {
        const savedEmail = localStorage.getItem('rememberedEmail');
        const encryptedPassword = localStorage.getItem('rememberedPassword');

        if (savedEmail && encryptedPassword) {
            const savedPassword = CryptoJS.AES.decrypt(encryptedPassword, secretKey).toString(CryptoJS.enc.Utf8)
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(true);
            setInputFocused(true);
        }
    }, [])

    useEffect(() => {
        if (refWrapper.current) {
            refWrapper.current.classList.add(cx('slide-in'));
        }

        return () => {
            if (refWrapper.current) {
                refWrapper.current.classList.remove(cx('slide-in'));
            }
        };
    }, []);

    const handleNavLinkClick = (e) => {
        e.preventDefault();
        if (refWrapper.current) {
            refWrapper.current.classList.add(cx('slide-out'));
            setTimeout(() => {
                navigate('/signup');
            }, 500);
        }
    };

    return (
        <WrapperNullLayout>
            <div ref={refWrapper} className={cx('wrapper')}>
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
                                onKeyPress={(e) => handleKeyPress(e)}
                                label="Email"
                                className={cx('input')}
                                email
                                onFocus={inputFocused}
                            />
                            <BoxInput
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e)}
                                label="Password"
                                className={cx('input')}
                                isPassword
                                onFocus={inputFocused}
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
                            <div className={cx('login-social')}>
                                <LoginSocialFacebook
                                        appId={facebookId}
                                        onResolve={(response) => {
                                            handleLoginFacebook(response.data)
                                        }}
                                        onReject={(error) => {
                                            console.log(error)
                                        }}
                                    >
                                    <div className={cx('fb-icon', 'btn-login-social')}>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </div>
                                </LoginSocialFacebook>
                                <LoginSocialGoogle
                                    client_id={googleId}
                                    scope="openid profile email"
                                    onResolve={(response) => {
                                        handleLoginGoogle(response.data)
                                    }}
                                    onReject={(error) => {
                                        console.log(error)
                                    }}
                                >
                                    <div className={cx('gg-icon', 'btn-login-social')}>
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </div>
                                </LoginSocialGoogle>
                            </div>
                            <div className={cx('to-signup')}>
                                <p>Don't have an account? <NavLink onClick={handleNavLinkClick} to="/signup" className={cx('signup')}>Sign Up</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showAlert && <Alert show={showAlert} setShow={setShowAlert} onClose={() => setShowAlert(false)}>{alertContent}</Alert>}
        </WrapperNullLayout>
    );
}

export default Login;
