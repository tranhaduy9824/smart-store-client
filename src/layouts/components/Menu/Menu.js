import classNames from 'classnames/bind';
import style from './Menu.module.scss'
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style)

function Menu() {
    return (
        <div className={cx('wrapper')}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </div>
    );
}

export default Menu;