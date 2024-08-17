/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import styles from './MyShop.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '~/context/AuthContext';
import { ShopContext } from '~/context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '~/context/ProductContext';
import InfoShop from '~/components/InfoShop';
import Overview from './Overview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import EditShop from './EditShop';

const cx = classNames.bind(styles);

function MyShop() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [productShop, setProductShop] = useState([]);
    const [showManageOrder, setShowManageOrder] = useState(true);
    const [showManageProduct, setShowManageProduct] = useState(true);
    const [showCustomerCare, setShowCustomerCare] = useState(true);
    const [content, setContent] = useState('overview');

    const { user } = useContext(AuthContext);
    const { myShop, getMyShop } = useContext(ShopContext);
    const { getProductsByShop } = useContext(ProductContext);

    useEffect(() => {
        const fetchMyShop = async () => {
            try {
                if (user && myShop?._id !== prevMyShopId.current) {
                    prevMyShopId.current = myShop?._id;
                    await getMyShop(user.token);
                    const productShop = await getProductsByShop(myShop?._id);
                    setProductShop(productShop);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Error fetching my shop:', error);
                setIsLoading(false);
            }
        };

        fetchMyShop();

        return () => {
            window.scrollTo(0, 0);
        };
    }, [user, getMyShop, getProductsByShop, myShop]);

    const prevMyShopId = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!myShop && !isLoading) {
        navigate('/');
        return null;
    }

    return (
        <div className={cx('wrapper')}>
            <InfoShop avatar={user?.user?.avatar} productShop={productShop} shop={myShop} myShop />
            <div className={cx('box-content')}>
                <div className={cx('controls')}>
                    <ul>
                        <li className={cx({ selected: content === 'overview' })} onClick={() => setContent('overview')}>
                            Tổng quan
                        </li>
                        <li
                            className={cx({ selected: content === 'edit-shop' })}
                            onClick={() => setContent('edit-shop')}
                        >
                            Sửa thông tin
                        </li>
                        <li onClick={() => setShowManageOrder(!showManageOrder)}>
                            Quản lý đơn hàng
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className={cx('right-icon', { isShow: showManageOrder })}
                            />
                        </li>
                        <ul className={cx({ isShow: showManageOrder })}>
                            <li className={cx('level-2')}>Tất cả</li>
                            <li className={cx('level-2')}>Đơn hủy</li>
                            <li className={cx('level-2')}>Cài đặt vận chuyển</li>
                        </ul>
                        <li onClick={() => setShowManageProduct(!showManageProduct)}>
                            Quản lý sản phẩm
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className={cx('right-icon', { isShow: showManageProduct })}
                            />
                        </li>
                        <ul className={cx({ isShow: showManageProduct })}>
                            <li className={cx('level-2')}>Tất cả sản phẩm</li>
                            <li className={cx('level-2')}>Thêm sản phẩm</li>
                        </ul>
                        <li onClick={() => setShowCustomerCare(!showCustomerCare)}>
                            Chăm sóc khánh hàng
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className={cx('right-icon', { isShow: showCustomerCare })}
                            />
                        </li>
                        <ul className={cx({ isShow: showCustomerCare })}>
                            <li className={cx('level-2')}>Quản lý Chat</li>
                            <li className={cx('level-2')}>Quản lý đánh giá</li>
                        </ul>
                        <li>Doanh thu</li>
                    </ul>
                </div>
                <div className={cx('content')}>
                    {content === 'overview' && <Overview />}
                    {content === 'edit-shop' && <EditShop />}
                </div>
            </div>
        </div>
    );
}

export default MyShop;
