import classNames from 'classnames/bind';
import styles from './OrderItem.module.scss';
import images from '~/assets/images';
import { NavLink } from 'react-router-dom';
import { GuaranteeIcon } from '../Icons';

const cx = classNames.bind(styles);

function OrderItem({ data, className }) {
    return (
        <div className={cx('wrapper', { [className]: className })}>
            <div className={cx('content')}>
                <NavLink>
                    <img src={images.test} alt="Image" />
                </NavLink>
                <div className={cx('info-item')}>
                    <h4>
                        <NavLink>Laptop Asus Vivobook E1404FA-NK186W R5-7520U/16GB/512GB/14" FHD/Win11</NavLink>
                    </h4>
                    <p>x1</p>
                </div>
                <div className={cx('price')}>
                    <span className={cx('sale-price')}>20.000 VND</span>
                    <del>
                        <i>
                            <span className={cx('price-old')}>20.000 VND</span>
                        </i>
                    </del>
                </div>
            </div>
            <div className={cx('total')}><GuaranteeIcon />Thành tiền: <span>50.000 VND</span></div>
            <div className={cx('action')}>
                <div className={cx('buy-again')}>Mua lại</div>
                <div className={cx('cancel-btn')}>Hủy đơn hàng</div>
                <div className={cx('pay-btn')}>Thanh toán</div>
                <div className={cx('contact')}>Liên hệ người bán</div>
            </div>
        </div>
    );
}

export default OrderItem;
