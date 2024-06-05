import { useDispatch } from 'react-redux';
import { hideAlert, showAlert } from '~/redux/actions/alert';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './ResetPassword.module.scss';
import BoxInput from '~/components/BoxInput';
import Button from '~/components/Button';
import WrapperAnimation from '~/components/WrapperAnimation';
import { hideLoading, showLoading } from '~/redux/actions/loading';

const cx = classNames.bind(styles);

function ResetPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate(null);
    const [show, setShow] = useState(true);
    const { id, token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleValidation = () => {
        if (password.length < 8) {
            dispatch(showAlert('Please enter a password with at least 8 characters.'))
            return false;
        }

        if (password !== confirmPassword) {
            dispatch(showAlert('Password do not match!'));
            return false;
        }

        return true;
    }

    const handleReset = async () => {
        try {
            if (handleValidation()) {
                dispatch(showLoading())
                await axios.post(`/users/reset-password/${id}/${token}`, { password });
                dispatch(hideLoading())
                dispatch(showAlert('Reset password successfully!'));
                setTimeout(() => {
                    dispatch(hideAlert());
                    setShow(false);
                    setTimeout(() => {
                        navigate('/login', { state: { animation: 'showItem' } });
                    }, 500);
                }, 1000);
            }
        } catch (error) {
            dispatch(hideLoading())
            dispatch(showAlert('Token expired!'));
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleReset();
        }
    };

    return (
        <WrapperAnimation show={show} showItem hiddenItem>
            <div className={cx('wrapper')}>
                <p className={cx('title')}>Reset password</p>
                <p className={cx('des')}>Enter a new password below to change your password</p>
                <BoxInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isPassword
                    label="New password"
                    onKeyPress={(e) => handleKeyPress(e)}
                />
                <BoxInput
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    isPassword
                    label="Confirm new password"
                    onKeyPress={(e) => handleKeyPress(e)}
                />
                <Button onClick={handleReset}>Reset password</Button>
            </div>
        </WrapperAnimation>
    );
}

export default ResetPassword;
