/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import styles from './OrderItem.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { GuaranteeIcon, OrderIcon, PaymentIcon, ReceiveIcon, ReviewIcon } from '../Icons';
import { formatPrice } from '~/handle/formatPrice';
import snippet from '~/handle/snippet';
import { useContext, useState } from 'react';
import { OrderContext } from '~/context/OrderContext';
import { AuthContext } from '~/context/AuthContext';
import WrapperModel from '../WrapperModel';

const cx = classNames.bind(styles);

function OrderItem({ data, status, className }) {
    const navigate = useNavigate();
    const [showOrderDetail, setShowOrderDetail] = useState(false);

    const { user } = useContext(AuthContext);
    const { createPayment, updateOrder, changeItemId } = useContext(OrderContext);

    const stepsCompleted =
        data?.allStatus === 'done'
            ? 3
            : (data?.allStatus === 'delivering' && data?.paymentMethod === 'digital_wallet') || data?.status === 'done'
            ? 2
            : data?.allStatus !== 'cancelled'
            ? 1
            : 0;

    const lineWidth = (stepsCompleted / 4) * 100;
    const widthStyle = lineWidth === 0 ? '0%' : `calc(${lineWidth}% + 20px)`;

    return (
        data?.allStatus === status && (
            <div className={cx('wrapper', { [className]: className, changeItem: changeItemId === data?._id })}>
                <div className={cx('content')}>
                    <div className={cx('box-image')}>
                        {data?.items?.slice(0, 3).map((item, index) => (
                            <Link
                                key={index}
                                to={`/product/${item?.productId?._id}`}
                                className={cx({
                                    'two-image': data?.items?.length === 2,
                                    'three-image': data?.items?.length >= 3,
                                })}
                            >
                                <img src={item?.productId?.files?.photos[0]} alt="Image" />
                            </Link>
                        ))}
                    </div>
                    <div className={cx('info-item')}>
                        {data?.items?.map((item, index) => (
                            <h4 key={index}>
                                <Link to={`/product/${item?.productId?._id}`}>
                                    {data?.items?.length === 1
                                        ? item?.productId?.name
                                        : snippet(item?.productId?.name, 45)}
                                </Link>
                                <span>(x{item?.quantity})</span>
                            </h4>
                        ))}
                    </div>
                    <div className={cx('info-order')}>
                        <p>{data?.paymentMethod === 'cash_on_delivery' ? 'Thanh toán khi nhận hàng' : 'Ví điện tử'}</p>
                        <p>
                            Phí vận chuyển: <span>{formatPrice(data?.shippingCost)}</span>
                        </p>
                    </div>
                </div>
                <div className={cx('total')}>
                    <GuaranteeIcon />
                    Thành tiền: <span>{formatPrice(data?.totalPrice)}</span>
                </div>
                <div className={cx('action')}>
                    <div
                        className={cx('buy-again')}
                        onClick={() => navigate('/payment', { state: { items: data?.items } })}
                    >
                        Mua lại
                    </div>
                    <div className={cx('detail-btn')} onClick={() => setShowOrderDetail(true)}>
                        Xem chi tiết
                    </div>
                    {data?.allStatus === 'wait_confirm' && (
                        <div
                            className={cx('cancel-btn')}
                            onClick={() => updateOrder({ allStatus: 'cancelled' }, user?.token, data?._id)}
                        >
                            Hủy đơn hàng
                        </div>
                    )}
                    {data?.allStatus === 'wait_confirm' && data?.paymentMethod === 'digital_wallet' && (
                        <div
                            className={cx('pay-btn')}
                            onClick={() => createPayment(data?.totalPrice, data?._id, user?.token)}
                        >
                            Thanh toán
                        </div>
                    )}
                </div>
                <WrapperModel
                    classNameContent={cx('model-order-detail')}
                    show={showOrderDetail}
                    onClose={() => setShowOrderDetail(false)}
                >
                    <div className={cx('status')}>
                        <div className={cx('line')} style={{ width: widthStyle, transition: 'width 0.4s ease' }}></div>
                        <div className={cx('items-status')}>
                            <div className={cx('item', { success: data?.allStatus !== 'cancelled' })}>
                                <div className={cx('icon')}>
                                    <OrderIcon />
                                </div>
                                <div className={cx('text')}>Đơn hàng đã đặt</div>
                            </div>
                            <div
                                className={cx('item', {
                                    success:
                                        (data?.allStatus === 'delivering' &&
                                            data?.paymentMethod === 'digital_wallet') ||
                                        data?.allStatus === 'done',
                                })}
                            >
                                <div className={cx('icon')}>
                                    <PaymentIcon />
                                </div>
                                <div className={cx('text')}>
                                    Đơn hàng đã thanh toán ({formatPrice(data?.totalPrice)})
                                </div>
                            </div>
                            <div
                                className={cx('item', {
                                    success: data?.allStatus === 'done',
                                })}
                            >
                                <div className={cx('icon')}>
                                    <ReceiveIcon />
                                </div>
                                <div className={cx('text')}>Đã nhận được hàng</div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('icon')}>
                                    <ReviewIcon />
                                </div>
                                <div className={cx('text')}>Đơn hàng đã được đánh giá</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('products')}>
                            {data?.items?.map((item, index) => (
                                <>
                                    <div className={cx('item')} key={index}>
                                        <Link>
                                            <img src={item?.productId?.files?.photos[0]} alt="Image" />
                                        </Link>
                                        <div className={cx('info-item')}>
                                            <h4>
                                                <Link to={`/product/${item?.productId?._id}`}>
                                                    {item?.productId?.name}
                                                </Link>
                                                <span>(x{item?.quantity})</span>
                                            </h4>
                                        </div>
                                        <div className={cx('status-text')}>
                                            <div>{formatPrice(data?.totalPrice)}</div>
                                            <p>
                                                Trạng thái:{' '}
                                                <span>
                                                    {(item?.status === 'wait_confirm' &&
                                                        data?.allStatus !== 'cancelled' &&
                                                        'Chờ xác nhận') ||
                                                        (item?.status === 'delivering' &&
                                                            data?.allStatus !== 'done' &&
                                                            'Đang vận chuyển') ||
                                                        ((item?.status === 'done' || data?.allStatus === 'done') &&
                                                            'Hoàn thành') ||
                                                        ((item?.status === 'cancelled' ||
                                                            data?.allStatus === 'cancelled') &&
                                                            'Đã hủy')}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('control')} key={index}>
                                        {data?.allStatus === 'done' && <div className={cx('btn-review')}>Đánh giá</div>}
                                        <div className={cx('contact')}>Liên hệ người bán</div>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className={cx('bill-address')}>
                            <p>Mã đơn hàng: {data?._id}</p>
                            <div className={cx('bill')}>
                                <div>
                                    <div>Tổng tiền hàng</div>
                                    <div className={cx('money')}>
                                        {formatPrice(data?.totalPrice - data?.shippingCost)}
                                    </div>
                                </div>
                                <div>
                                    <div>Phí vận chuyển</div>
                                    <div className={cx('money')}>{formatPrice(data?.shippingCost)}</div>
                                </div>
                                <div>
                                    <div>Thành tiền</div>
                                    <div className={cx('money')}>{formatPrice(data?.totalPrice)}</div>
                                </div>
                                <div>
                                    <div>
                                        <GuaranteeIcon />
                                        Phương thức thanh toán
                                    </div>
                                    <div className={cx('payment-method')}>
                                        {data?.paymentMethod === 'cash_on_delivery'
                                            ? 'Thanh toán khi nhận hàng'
                                            : 'Ví điện tử'}
                                    </div>
                                </div>
                            </div>
                            <p>Địa chỉ nhận hàng</p>
                            <div className={cx('address')}>
                                <div>{data?.shippingAddress?.recipientName}</div>
                                <div>{data?.shippingAddress?.recipientPhone}</div>
                                <div>{`${data?.shippingAddress?.specificAddress}, ${data?.shippingAddress?.address}`}</div>
                            </div>
                        </div>
                    </div>
                </WrapperModel>
            </div>
        )
    );
}

export default OrderItem;
