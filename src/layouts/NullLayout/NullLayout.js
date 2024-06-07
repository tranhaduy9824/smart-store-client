import classNames from "classnames/bind";
import styles from './NullLayout.module.scss'

const cx = classNames.bind(styles)

function NullLayout({ className, children }) {
    return ( 
        <div className={cx('wrapper', {className: className})}>
            <div className={cx('circle1')}></div>
            <div className={cx('circle2')}></div>
            <div className={cx('content')}>{children}</div>
        </div>
     );
}

export default NullLayout;