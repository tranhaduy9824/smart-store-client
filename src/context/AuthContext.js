import { createContext, useCallback } from 'react';
import CryptoJS from 'crypto-js';
import { useDispatch } from 'react-redux';

import { hideAlert, showAlert } from '~/redux/actions/alert';
import { hideLoading, showLoading } from '~/redux/actions/loading';
import { postRequest } from '~/utils/services';
import { useNavigate } from 'react-router-dom';
import { handleValidation } from '~/handle/handleValidation';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate(null);
    const secretKey = process.env.REACT_APP_SECRET_KEY;

    // Login
    const handleLogin = useCallback(
        async (email, password, rememberMe, navigateHome) => {
            if (!email || !password) {
                dispatch(showAlert('Email và mật khẩu là bắt buộc!'));
                return;
            }

            const authData = {
                email: email,
                password: password,
            };

            try {
                dispatch(showLoading());
                const data = await postRequest('/users/login', authData);
                sessionStorage.setItem('token', data.token);

                if (rememberMe) {
                    const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
                    localStorage.setItem('rememberedEmail', email);
                    localStorage.setItem('rememberedPassword', encryptedPassword);
                } else {
                    localStorage.removeItem('rememberedEmail');
                    localStorage.removeItem('rememberedPassword');
                }

                dispatch(hideLoading());
                dispatch(showAlert('Đăng nhập thành công!'));
                navigateHome();
            } catch (error) {
                dispatch(hideLoading());
                dispatch(showAlert('Email hoặc mật khẩu không đúng!'));
            }
        },
        [dispatch, secretKey],
    );

    const handleLoginFacebook = useCallback(
        async (data, navigateHome) => {
            const { name, email } = data;
            const avatar = data.picture.data.url;

            const fbUserData = {
                email,
                name,
                avatar,
            };

            try {
                dispatch(showLoading());
                const data = await postRequest('/users/facebook-login', fbUserData);
                sessionStorage.setItem('token', data.token);

                dispatch(hideLoading());
                dispatch(showAlert('Đăng nhập thành công!'));
                navigateHome();
            } catch (error) {
                dispatch(hideLoading());
                dispatch(showAlert(error.toString()));
            }
        },
        [dispatch],
    );

    const handleLoginGoogle = useCallback(
        async (data, navigateHome) => {
            const { name, email } = data;

            const ggUserData = {
                email,
                name,
            };

            console.log(ggUserData);

            try {
                dispatch(showLoading());
                const data = await postRequest('/users/google-login', ggUserData);
                sessionStorage.setItem('token', data.token);

                dispatch(hideLoading());
                dispatch(showAlert('Đăng nhập thành công!'));
                navigateHome();
            } catch (error) {
                dispatch(hideLoading());
                dispatch(showAlert(error.toString()));
            }
        },
        [dispatch],
    );

    // Signup
    const handleSignUp = useCallback(
        async (fullname, email, password, confirmPassword, setShow) => {
            const userData = {
                fullname,
                email,
                password,
            };

            try {
                if (handleValidation(fullname, email, password, confirmPassword, dispatch)) {
                    dispatch(showLoading());
                    await postRequest('/users/signup', userData);
                    dispatch(hideLoading());
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
                dispatch(hideLoading());
                if (error.response && error.response.status === 409) {
                    dispatch(showAlert('Mail exists!'));
                } else {
                    dispatch(showAlert('Điền đầy đủ thông tin!'));
                }
            }
        },
        [dispatch, navigate],
    );

    // Forgot password
    const handleSendEmail = useCallback(
        async (email, setStatusEmail) => {
            try {
                dispatch(showLoading());
                await postRequest('/users/forgot-password', { email });
                dispatch(hideLoading());
                setStatusEmail(true);
            } catch (error) {
                dispatch(hideLoading());
                dispatch(showAlert('Người dùng không tồn tại!'));
            }
        },
        [dispatch],
    );

    // Reset password
    const handleReset = async (id, token, password, confirmPassword, setShow) => {
        try {
            if (handleValidation('Default Name', 'default@example.com', password, confirmPassword, dispatch)) {
                dispatch(showLoading());
                await postRequest(`/users/reset-password/${id}/${token}`, { password });
                dispatch(hideLoading());
                dispatch(showAlert('Đặt lại mật khẩu thành công!'));
                setTimeout(() => {
                    dispatch(hideAlert());
                    setShow(false);
                    setTimeout(() => {
                        navigate('/login', { state: { animation: 'showItem' } });
                    }, 500);
                }, 1000);
            }
        } catch (error) {
            dispatch(hideLoading());
            dispatch(showAlert('Mã thông báo đã hết hạn!'));
        }
    };

    return (
        <AuthContext.Provider
            value={{
                handleLogin,
                handleLoginFacebook,
                handleLoginGoogle,
                handleSignUp,
                handleSendEmail,
                handleReset,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
