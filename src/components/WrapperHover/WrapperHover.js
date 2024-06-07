import classNames from 'classnames/bind';
import styles from './WrapperHover.module.scss';

const cx = classNames.bind(styles);

function WrapperHover({ start, end, content, children, className }) {
    return (
        <div className={cx('wrapper')}>
            {children}
            <div className={cx('icon')}></div>
            <div className={cx('content-hover', { start: start, end: end })}>
                <div className={cx('content', { [className]: className })}>{content}</div>
            </div>
        </div>
    );
}

export default WrapperHover;
