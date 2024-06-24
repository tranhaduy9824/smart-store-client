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
            dispatch(showAlert('Vui lòng nhập mật khẩu có ít nhất 8 ký tự.'))
            return false;
        }

        if (password !== confirmPassword) {
            dispatch(showAlert('Mật khẩu không khớp!'));
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
            dispatch(hideLoading())
            dispatch(showAlert('Mã thông báo đã hết hạn!'));
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
                <p className={cx('title')}>Đặt lại mật khẩu</p>
                <p className={cx('des')}>Nhập mật khẩu mới bên dưới để thay đổi mật khẩu của bạn</p>
                <BoxInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isPassword
                    label="Mật khẩu mới"
                    onKeyPress={(e) => handleKeyPress(e)}
                />
                <BoxInput
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    isPassword
                    label="Xác nhận mật khẩu mới"
                    onKeyPress={(e) => handleKeyPress(e)}
                />
                <Button onClick={handleReset}>Đặt lại mật khẩu</Button>
            </div>
        </WrapperAnimation>
    );
}

export default ResetPassword;
