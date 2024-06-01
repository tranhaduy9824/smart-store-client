import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';

import WrapperModel from '../WrapperModel';
import images from '~/assets/images';
import BoxInput from '../BoxInput';
import Button from '../Button';

const cx = classNames.bind(styles);

function ForgotPassword({ show, onClose, email }) {
    const [inputEmail, setInputEmail] = useState(email);
    const [focused, setFocused] = useState(false);
    const [statusEmail, setStatusEmail] = useState(false);

    const handleSendEmail = () => {
        setStatusEmail(true);
    };

    useEffect(() => {
        if (inputEmail) {
            setFocused(true);
        }
    }, []);

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
