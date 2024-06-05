import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import axios from 'axios';

import WrapperModel from '../WrapperModel';
import images from '~/assets/images';
import BoxInput from '../BoxInput';
import Button from '../Button';
import { showAlert } from '~/redux/actions/alert';
import { hideLoading, showLoading } from '~/redux/actions/loading';

const cx = classNames.bind(styles);

function ForgotPassword({ show, onClose, email }) {
    const dispatch = useDispatch()
    const [inputEmail, setInputEmail] = useState(email);
    const [focused, setFocused] = useState(false);
    const [statusEmail, setStatusEmail] = useState(false);

    const handleSendEmail = async () => {
        try {
            dispatch(showLoading())
            await axios.post('/users/forgot-password', {email: inputEmail})
            dispatch(hideLoading())
            setStatusEmail(true)
        } catch (error) {
            dispatch(hideLoading())
            dispatch(showAlert('User not exist!'));
        }
    };

    useEffect(() => {
        if (inputEmail) {
            setFocused(true);
        }
    }, [inputEmail]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendEmail();
        }
    };

    return (
        <WrapperModel show={show} onClose={onClose} classIcon={cx('icon-close')}>
            <div className={cx('wrapper')}>
                {!statusEmail ? (
                    <div className={cx('send-email')}>
                        <img
                            src={images.forgot_password_image}
                            alt="Forgot password"
                            className={cx('image')}
                        />
                        <p className={cx('title')}>Forgot your password?</p>
                        <p className={cx('des')}>
                            Enter your e-mail address and we'll send you a link to reset your password
                        </p>
                        <BoxInput
                            value={inputEmail}
                            onChange={(e) => setInputEmail(e.target.value)}
                            label="Enter email"
                            email
                            onFocus={focused}
                            onKeyPress={(e) => handleKeyPress(e)}
                        />
                        <Button onClick={handleSendEmail}>Send email</Button>
                    </div>
                ) : (
                    <div className={cx('send-success')}>
                        <img src={images.check_email_image} alt="Check email" className={cx('image')} />
                        <p className={cx('title')}>Check in your email!</p>
                        <p className={cx('des')}>We just emailed you with the instructions to reset your password</p>
                        <p className={cx('help-contact')}>For any questions of problems please email us at</p>
                        <p className={cx('email-contact')}>duyth.22it@vku.udn.vn</p>
                    </div>
                )}
            </div>
        </WrapperModel>
    );
}

export default ForgotPassword;
