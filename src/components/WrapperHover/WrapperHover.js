import classNames from 'classnames/bind';
import styles from './WrapperHover.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function WrapperHover({ noIcon, start, end, right, content, children, className, classNameContent, classNameWrapper }) {
    return (
        <div className={cx('wrapper', { [classNameWrapper]: classNameWrapper })}>
            {children}
            {!noIcon && <div className={cx('icon')}></div>}
            <div className={cx('content-hover', { start: start, end: end, right: right, [classNameContent]: classNameContent })}>
                <div className={cx('content', { [className]: className })}>
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}><NavLink>{item}</NavLink></li>
                            ))}
                        </ul>
                    ) : (
                        content
                    )}
                </div>
            </div>
        </div>
    );
}

export default WrapperHover;
