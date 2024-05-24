import classNames from "classnames/bind";
import styles from './Alert.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles)

function Alert({ show, onClose, children }) {
    const [hidden, setHidden] = useState(!show)

    const handleClose = () => {
        setHidden(true)

        setTimeout(() => {
            onClose()
        }, 500)
    }

    return ( 
        <div className={cx('wrapper')} onClick={handleClose}>
            <div className={cx('content', {hidden: hidden})}>
                <div className={cx('title')}>
                    <span>Notification</span>
                    <FontAwesomeIcon onClick={handleClose} icon={faTimes} className={cx('icon-clear')} />
                </div>
                <p className={cx('message')}>{children}</p>
            </div>
        </div>
    );
}

export default Alert;