import classNames from "classnames/bind";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ onClick, className, children }) {
    return ( 
        <div className={cx('wrapper', {className: className})}>
            <button onClick={onClick}>{children}</button>
        </div>
    );
}

export default Button;