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
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import ItemHover from './ItemHover/ItemHover';
import { useContext } from 'react';
import { AuthContext } from '~/context/AuthContext';
import Avatar from '~/components/Avatar';

const cx = classNames.bind(style);

function Header() {
    const { user, handleLogout } = useContext(AuthContext);

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
                        <p>Hỗ trợ 24/7</p>
                    </div>
                    <WrapperHover
                        content={
                            user
                                ? [
                                      { title: 'Thông tin', to: '/profile' },
                                      { title: 'Đăng xuất', onClick: handleLogout },
                                  ]
                                : 'Đăng nhập'
                        }
                        end
                        className={cx('box-hover', { 'is-user': user })}
                    >
                        {user ? (
                            <div className={cx('avatar')}>
                                <Avatar url={user.user.avatar} />
                            </div>
                        ) : (
                            <ButtonIcon to="/login" className={cx('icon-header-user', 'account-icon')}>
                                <AccountIcon />
                            </ButtonIcon>
                        )}
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
                                    <span className={cx('title')}>Giỏ hàng của tôi</span>
                                    <span className={cx('cart-price-total')}>0 VND</span>
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
                                <ItemHover>Ưu đãi hôm nay</ItemHover>
                                <ItemHover>Gợi ý</ItemHover>
                                <ItemHover index={0} contentHover={['Nam', 'Nữ', 'Khác']}>
                                    Thời trang
                                </ItemHover>
                                <ItemHover index={1} contentHover={['Máy tính', 'Điện thoại', 'Phụ kiện']}>
                                    Thiết bị điện tử
                                </ItemHover>
                                <ItemHover index={2} contentHover={['Xe máy', 'Xe hơi', 'Phụ kiện xe']}>
                                    Xe
                                </ItemHover>
                                <ItemHover index={3} contentHover={['Đồ ăn', 'Thức uống', 'Nguyên liệu']}>
                                    Đồ ăn và thức uống
                                </ItemHover>
                                <ItemHover index={4} contentHover={['Nội địa', 'Thiết bị gia dụng', 'Đồ gia dụng nhỏ']}>
                                    Đồ gia dụng
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
                            Sản phẩm theo thể loại
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
                        Ưu đãi hôm nay
                    </Button>
                    <Button
                        iconLeft={<SaleIcon />}
                        className={cx('wrapper-item-navigate')}
                        classNameSub={cx('item-navigate')}
                        classNameIcon={cx('icon-left-item')}
                    >
                        Giá đặc biệt
                    </Button>
                    <Button className={cx('wrapper-item-navigate')} classNameSub={cx('item-navigate')}>
                        Trang chủ
                    </Button>
                    <WrapperHover
                        content={['Sản phẩm', 'Giỏ hàng', 'Thanh toán']}
                        classNameWrapper={cx('wrapper-hover-navigate')}
                    >
                        <Button
                            iconRight={<DownIcon />}
                            className={cx('wrapper-item-navigate')}
                            classNameSub={cx('item-navigate')}
                            classNameIcon={cx('icon-right-item')}
                        >
                            Sản phẩm
                        </Button>
                    </WrapperHover>
                    <WrapperHover
                        content={['Blog mặc định', 'Bài đăng đơn']}
                        classNameWrapper={cx('wrapper-hover-navigate')}
                    >
                        <Button
                            iconRight={<DownIcon />}
                            className={cx('wrapper-item-navigate')}
                            classNameSub={cx('item-navigate')}
                            classNameIcon={cx('icon-right-item')}
                        >
                            Blog
                        </Button>
                    </WrapperHover>
                    <WrapperHover
                        content={['Về chúng tôi', 'Liên hệ chúng tôi', 'Câu hỏi thường gặp', 'Trang 404', 'Sắp ra mắt']}
                        classNameWrapper={cx('wrapper-hover-navigate')}
                    >
                        <Button
                            iconRight={<DownIcon />}
                            className={cx('wrapper-item-navigate')}
                            classNameSub={cx('item-navigate')}
                            classNameIcon={cx('icon-right-item')}
                        >
                            Trang
                        </Button>
                    </WrapperHover>
                    <Button className={cx('wrapper-item-navigate')} classNameSub={cx('item-navigate')}>
                        Thương hiệu
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
                            Đã xem gần đây
                        </Button>
                    </WrapperHover>
                </div>
            </div>
        </header>
    );
}

export default Header;
