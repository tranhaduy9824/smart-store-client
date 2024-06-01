import classNames from 'classnames/bind';
import styles from './Alert.module.scss';
import WrapperModel from '../WrapperModel';

const cx = classNames.bind(styles);

function Alert({ show, onClose, children }) {
    return (
        <WrapperModel show={show} onClose={onClose}>
            <div className={cx('wrapper')}> 
                <div className={cx('title')}>
                    <span>Notification</span>
                </div>
                <p className={cx('message')}>{children}</p>
            </div>
        </WrapperModel>
    );
}

export default Alert;
