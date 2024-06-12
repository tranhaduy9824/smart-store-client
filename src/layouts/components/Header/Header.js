import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/images';
import Search from '~/components/Search';
import {
    AccountIcon,
    CartIcon,
    DownIcon,
    FavouriteIcon,
    RecentlyIcon,
    SaleIcon,
    ThunderIcon,
} from '~/components/Icons';
import ButtonIcon from '~/components/ButtonIcon';
import WrapperHover from '~/components/WrapperHover';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import ItemHover from './ItemHover/ItemHover';

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
                            <NavLink to="/cart">
                                <div className={cx('cart-text')}>
                                    <span className={cx('title')}>My cart</span>
                                    <span className={cx('cart-price-total')}>$0.00</span>
                                </div>
                            </NavLink>
                        </div>
                    </WrapperHover>
                </div>
            </div>
            <div className={cx('header-bottom')}>
                <div className={cx('box-categories')}>
                    <WrapperHover
                        start
                        noIcon
                        content={
                            <ul>
                                <ItemHover>Daily Deals</ItemHover>
                                <ItemHover>Recommend</ItemHover>
                                <ItemHover index={0} contentHover={['Man', 'Women', 'Orther']}>
                                    Fashion
                                </ItemHover>
                                <ItemHover index={1} contentHover={['Laptop', 'Mobile', 'Accessory']}>
                                    Electronic Device
                                </ItemHover>
                                <ItemHover index={2} contentHover={['Motobike', 'Car', 'Car accessory']}>
                                    Car
                                </ItemHover>
                                <ItemHover index={3} contentHover={['Food', 'Drink', 'Ingredient']}>
                                    Food and Drink
                                </ItemHover>
                                <ItemHover
                                    index={4}
                                    contentHover={['Interior', 'Household appliances', 'Small household appliances']}
                                >
                                    HouseWare
                                </ItemHover>
                            </ul>
                        }
                        className={cx('hover-box-categories')}
                    >
                        <Button
                            iconLeft={<FontAwesomeIcon icon={faBars} />}
                            className={cx('wrapper-categories')}
                            classNameSub={cx('item-categories')}
                            classNameIcon={cx('icon-item-categories')}
                        >
                            Shop by category
                        </Button>
                    </WrapperHover>
                </div>
                <div className={cx('list-item-navigate')}>
                    <Button
                        iconLeft={<ThunderIcon />}
                        className={cx('wrapper-item-navigate')}
                        classNameSub={cx('item-navigate')}
                        classNameIcon={cx('icon-left-item')}
                    >
                        Deals Today
                    </Button>
                    <Button
                        iconLeft={<SaleIcon />}
                        className={cx('wrapper-item-navigate')}
                        classNameSub={cx('item-navigate')}
                        classNameIcon={cx('icon-left-item')}
                    >
                        Special Prices
                    </Button>
                    <WrapperHover content={['Man', 'Women', 'Orther']} classNameWrapper={cx('wrapper-hover-navigate')}>
                        <Button
                            iconRight={<DownIcon />}
                            className={cx('wrapper-item-navigate')}
                            classNameSub={cx('item-navigate')}
                            classNameIcon={cx('icon-right-item')}
                        >
                            Fresh
                        </Button>
                    </WrapperHover>
                    <WrapperHover content={['Man', 'Women', 'Orther']} classNameWrapper={cx('wrapper-hover-navigate')}>
                        <Button
                            iconRight={<DownIcon />}
                            className={cx('wrapper-item-navigate')}
                            classNameSub={cx('item-navigate')}
                            classNameIcon={cx('icon-right-item')}
                        >
                            Frozen
                        </Button>
                    </WrapperHover>
                    <Button className={cx('wrapper-item-navigate')} classNameSub={cx('item-navigate')}>
                        Demos
                    </Button>
                    <WrapperHover content={['Man', 'Women', 'Orther']} classNameWrapper={cx('wrapper-hover-navigate')}>
                        <Button
                            iconRight={<DownIcon />}
                            className={cx('wrapper-item-navigate')}
                            classNameSub={cx('item-navigate')}
                            classNameIcon={cx('icon-right-item')}
                        >
                            Shop
                        </Button>
                    </WrapperHover>
                    <WrapperHover content={['Man', 'Women', 'Orther']} classNameWrapper={cx('wrapper-hover-navigate')}>
                        <Button
                            iconRight={<DownIcon />}
                            className={cx('wrapper-item-navigate')}
                            classNameSub={cx('item-navigate')}
                            classNameIcon={cx('icon-right-item')}
                        >
                            Blog
                        </Button>
                    </WrapperHover>
                    <WrapperHover content={['Man', 'Women', 'Orther']} classNameWrapper={cx('wrapper-hover-navigate')}>
                        <Button
                            iconRight={<DownIcon />}
                            className={cx('wrapper-item-navigate')}
                            classNameSub={cx('item-navigate')}
                            classNameIcon={cx('icon-right-item')}
                        >
                            Pages
                        </Button>
                    </WrapperHover>
                    <Button className={cx('wrapper-item-navigate')} classNameSub={cx('item-navigate')}>
                        Brand
                    </Button>
                </div>
                <div className={cx('recently-view')}>
                    <WrapperHover
                        content={
                            <ul>
                                <li>
                                    <img src={images.test} alt="Ảnh được xem gần đây" />
                                </li>
                                <li>
                                    <img src={images.test} alt="Ảnh được xem gần đây" />
                                </li>
                                <li>
                                    <img src={images.test} alt="Ảnh được xem gần đây" />
                                </li>
                            </ul>
                        }
                        end
                        classNameWrapper={cx('wrapper-hover-recently')}
                    >
                        <Button
                            iconLeft={<RecentlyIcon />}
                            className={cx('wrapper-item-recently')}
                            classNameSub={cx('item-recently')}
                            classNameIcon={cx('icon-item-recently')}
                        >
                            Recently Viewed
                        </Button>
                    </WrapperHover>
                </div>
            </div>
        </header>
    );
}

export default Header;
