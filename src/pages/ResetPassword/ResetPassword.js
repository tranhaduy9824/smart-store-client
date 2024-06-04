import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";
import styles from './ResetPassword.module.scss'
import BoxInput from "~/components/BoxInput";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function ResetPassword() {
    const { id, token } = useParams()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleReset = async () => {
        try {
            if (password === confirmPassword) {
                const response = await axios.post(`/users/reset-password/${id}/${token}`, { password });
                console.log(response);
            } else {
                console.log('Passwords do not match');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={cx('wrapper')}>
            <BoxInput 
                value={password}
                onChange={e => setPassword(e.target.value)}
                isPassword
                label="New password"
            />
            <BoxInput 
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                isPassword
                label="Confirm new password"
            />
            <Button onClick={handleReset}>Reset password</Button>
        </div>
    );
}

export default ResetPassword;