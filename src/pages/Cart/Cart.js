import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { NavLink } from 'react-router-dom';
import images from '~/assets/images';
import Quantity from '~/components/Quantity';
import { HomeIcon, TrashIcon } from '~/components/Icons';
import { formatPrice } from '~/handle/formatPrice';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useState } from 'react';

const cx = classNames.bind(styles);

function Cart() {
    const [listProduct, setListProduct] = useState([
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 20000,
            quantity: 2,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 13000,
            quantity: 2,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 10000,
            quantity: 2,
        },
    ]);

    const handleQuantityChange = (index, newQuantity) => {
        setListProduct((prevList) => {
            const updatedList = [...prevList];
            updatedList[index].quantity = newQuantity;
            return updatedList;
        });
    };

    const totalPrice = useCallback(() => {
        return listProduct.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [listProduct]);

    const feeTransport = 30000

    return (
        <div className={cx('wrapper')}>
            <h1>Giỏ hàng</h1>
            <div className={cx('site')}>
                <NavLink to="/" className={cx('navigate')}>
                    Trang chủ
                </NavLink>{' '}
                <span> / </span>
                <NavLink to="/product" className={cx('navigate')}>
                    Sản phẩm
                </NavLink>{' '}
                <span> / </span>
                <NavLink>Giỏ hàng</NavLink>
            </div>
            <div className={cx('content')}>
                <table>
                    <tr>
                        <th></th>
                        <th>Sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th></th>
                    </tr>
                    {listProduct.map((item, index) => (
                        <tr>
                            <td>
                                <img src={item.images} alt="Image" />
                            </td>
                            <td>{item.name}</td>
                            <td>{formatPrice(item.price)}</td>
                            <td>
                                <Quantity
                                    quantityValue={item.quantity}
                                    setQuantityValue={(newQuantity) => handleQuantityChange(index, newQuantity)}
                                    className={cx('box-quantity')}
                                />
                            </td>
                            <td>{formatPrice(item.price * item.quantity)}</td>
                            <td>
                                <TrashIcon />
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className={cx('action')}>
                <div className={cx('action-left')}>
                    <Button
                        className={cx('btn-navigate')}
                        to="/product"
                        iconLeft={<FontAwesomeIcon icon={faArrowLeft} />}
                    >
                        Tiếp tục mua sắm
                    </Button>
                    <Button className={cx('btn-navigate')} to="/" iconLeft={<HomeIcon />}>
                        Trở về nhà
                    </Button>
                </div>
                <div className={cx('action-right')}>
                    <div className={cx('text')}>
                        <span>Tổng cộng</span>
                        <span>{formatPrice(totalPrice())}</span>
                    </div>
                    <div className={cx('text')}>
                        <span>Phí vận chuyển</span>
                        <span>{formatPrice(feeTransport)}</span>
                    </div>
                    <hr />
                    <div className={cx('text', 'total-cart')}>
                        <span>Tổng cộng</span>
                        <span className={cx('text-total-cart')}>{formatPrice(totalPrice() + feeTransport)}</span>
                    </div>
                    <Button className={cx('btn-check')}>Tiến hành kiểm tra</Button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
