import classNames from "classnames/bind";
import styles from './Alert.module.scss'

const cx = classNames.bind(styles)

function Alert() {
    return ( 
        <div className={cx('wrapper')}></div>
     );
}

export default Alert;