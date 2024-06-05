import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from './Loading.module.scss';
import WrapperModel from "../WrapperModel";

const cx = classNames.bind(styles);

function Loading() {
    const { show } = useSelector((state) => state.loading)

    return (
        <WrapperModel show={show} noClose classIcon={cx('icon-close')}>
            <div className={cx('wrapper')}></div>
        </WrapperModel>
    );
}

export default Loading;