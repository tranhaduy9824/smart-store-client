import classNames from 'classnames/bind';
import styles from './BoxInput.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function BoxInput({ value, onChange, label, email = false, isPassword = false, className }) {
    const [focus, setFocus] = useState(false);
    const [eye, setEye] = useState(false);

    const handleEyePassword = () => {
        setEye(!eye)
    }

    return (
        <div className={cx('wrapper', className)}>
            <label htmlFor="input" className={cx({focus: focus})}>{label}</label>
            <input
                id="input"
                value={value}
                onChange={onChange}
                type={email ? 'email' : (isPassword ? (!eye ? 'password' : 'text') : 'text')}
                onFocus={() => setFocus(true)}
                onBlur={() => !value && setFocus(false)}
                required
                className={cx({password: isPassword})}
            />
            {isPassword && (
                <FontAwesomeIcon
                    icon={eye ? faEyeSlash : faEye}
                    onClick={handleEyePassword}
                    className={cx('eye-icon')}
                />
            )}
        </div>
    );
}

export default BoxInput;
