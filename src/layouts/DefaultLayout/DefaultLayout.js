import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Menu from '../components/Menu';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Menu />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
