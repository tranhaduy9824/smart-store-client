import classNames from 'classnames/bind';
import styles from './ItemHover.module.scss';
import { NavLink } from 'react-router-dom';
import WrapperHover from '~/components/WrapperHover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ItemHover({ contentHover, index, children, to }) {
    return (
        <>
            {contentHover ? (
                <WrapperHover
                    right
                    noIcon
                    content={
                        <ul>
                            {contentHover.map((item, index) => (
                                <li key={index}>
                                    <NavLink>{item}</NavLink>
                                </li>
                            ))}
                        </ul>
                    }
                    classNameWrapper={cx('wrapper-hover')}
                    className={cx('wrapper-item-hover')}
                >
                    <li key={index}>
                        <NavLink to={to}>{children}</NavLink>
                        <FontAwesomeIcon icon={faChevronRight} className={cx('right-icon')} />
                    </li>
                </WrapperHover>
            ) : (
                <li key={index}>
                    <NavLink to={to}>{children}</NavLink>
                </li>
            )}
        </>
    );
}

export default ItemHover;
