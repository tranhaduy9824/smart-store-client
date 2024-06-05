import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from './WrapperModel.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import WrapperAnimation from "../WrapperAnimation";

const cx = classNames.bind(styles);

function WrapperModel({ show, onClose, noClose, className, classIcon, children }) {
    const [hidden, setHidden] = useState(!show);
    const [classHidden, setClassHidden] = useState(hidden);

    useEffect(() => {
        setHidden(!show);
    }, [show]);

    const handleClose = () => {
        setHidden(true);
        setTimeout(() => {
            onClose();
        }, 500);
    };

    useEffect(() => {
        if (!hidden) {
            setClassHidden(hidden);
        } else {
            setTimeout(() => {
                setClassHidden(hidden);
            }, 500);
        }
    }, [hidden]);

    return (
        <div
            className={cx('wrapper', { [className]: className, hidden: classHidden })}
            onClick={!noClose ? handleClose : undefined}
        >
            <WrapperAnimation showItem hiddenItem show={!hidden}>
                <div className={cx('content')} onClick={e => e.stopPropagation()}>
                    {children}
                    {!noClose && (
                        <FontAwesomeIcon
                            onClick={handleClose}
                            icon={faTimes}
                            className={cx('icon-clear', { [classIcon]: classIcon })}
                        />
                    )}
                </div>
            </WrapperAnimation>
        </div>
    );
}

export default WrapperModel;
