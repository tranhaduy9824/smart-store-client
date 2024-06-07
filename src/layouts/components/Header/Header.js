import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/images';
import Search from '~/components/Search';
import { AccountIcon, CartIcon, FavouriteIcon } from '~/components/Icons';
import ButtonIcon from '~/components/ButtonIcon';
import WrapperHover from '~/components/WrapperHover';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-main')}>
                <div className={cx('box-logo')}>
                    <NavLink to="/">
                        <img src={images.logo_and_text} alt="Logo" />
                    </NavLink>
                </div>
                <Search />
                <div className={cx('box-btn-user')}>
                    <div className={cx('support')}>
                        <span>0867 125 575</span>
                        <p>Support 24/7</p>
                    </div>
                    <WrapperHover content="Đăng nhập" end className={cx('box-hover')}>
                        <ButtonIcon to="/login" className={cx('icon-header-user', 'account-icon')}>
                            <AccountIcon />
                        </ButtonIcon>
                    </WrapperHover>
                    <WrapperHover content="Yêu thích" end className={cx('box-hover')}>
                        <ButtonIcon count="0" to="/favourite" className={cx('icon-header-user', 'favourite-icon')}>
                            <FavouriteIcon />
                        </ButtonIcon>
                    </WrapperHover>
                    <WrapperHover content="Giỏ hàng của tôi" end className={cx('box-hover')}>
                        <div className={cx('box-cart')}>
                            <ButtonIcon count="0" to="/cart" className={cx('icon-header-user', 'cart-icon')}>
                                <CartIcon />
                            </ButtonIcon>
                            <div className={cx('cart-text')}>
                                <span className={cx('title')}>My cart</span>
                                <span className={cx('cart-price-total')}>$0.00</span>
                            </div>
                        </div>
                    </WrapperHover>
                </div>
            </div>
            <div className={cx('header-bottom')}>
                
            </div>
        </header>
    );
}

export default Header;
