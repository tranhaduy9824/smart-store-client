import { useState } from "react";
import classNames from "classnames/bind";
import styles from './WrapperModel.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import WrapperAnimation from "../WrapperAnimation";

const cx = classNames.bind(styles);

function WrapperModel({ show, onClose, className, classIcon, children }) {
    const [hidden, setHidden] = useState(!show)

    const handleClose = () => {
        setHidden(true)

        setTimeout(() => {
            onClose()
        }, 500)
    }

    return (
        <div className={cx('wrapper', { [className]: className })} onClick={handleClose}>
            <WrapperAnimation showItem hiddenItem show={!hidden}>
                <div className={cx('content')} onClick={e => e.stopPropagation()}>
                    {children}
                    <FontAwesomeIcon onClick={handleClose} icon={faTimes} className={cx('icon-clear', {[classIcon]: classIcon})} />
                </div>
            </WrapperAnimation>
        </div>
    );
}

export default WrapperModel;