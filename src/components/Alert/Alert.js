import classNames from 'classnames/bind';
import styles from './Alert.module.scss';
import WrapperModel from '../WrapperModel';
import { useSelector, useDispatch } from 'react-redux';
import { hideAlert } from '~/redux/actions/alert';

const cx = classNames.bind(styles);

function Alert() {
    const { show, message } = useSelector((state) => state.alert);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(hideAlert());
    };

    return (
        <WrapperModel show={show} onClose={onClose}>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <span>Notification</span>
                </div>
                <p className={cx('message')}>{message}</p>
            </div>
        </WrapperModel>
    );
}

export default Alert;
