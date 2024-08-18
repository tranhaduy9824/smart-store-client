import classNames from 'classnames/bind';
import styles from './ManageOrder.module.scss';
import { useContext, useEffect, useState } from 'react';
import WrapperHover from '~/components/WrapperHover';
import { BillIcon, DownIcon } from '~/components/Icons';
import { OrderContext } from '~/context/OrderContext';
import { AuthContext } from '~/context/AuthContext';
import OrderItem from '~/components/OrderItem';
import HeaderSelect from '~/components/HeaderSelect/HeaderSelect';

const cx = classNames.bind(styles);

function ManageOrder() {
    const [contentSelected, setContentSelected] = useState('all');
    const [selectedSearch, setSelectedSearch] = useState(0);

    const { user } = useContext(AuthContext);
    const { orders, getOrders } = useContext(OrderContext);

    useEffect(() => {
        if (user) {
            getOrders(user.token);
        }
    }, [user, getOrders]);

    const listHeader = [
        {
            content: 'all',
            title: 'Tất cả',
        },
        {
            content: 'wait_confirm',
            title: 'Chờ xác nhận',
        },
        {
            content: 'delivering',
            title: 'Đang vận chuyển',
        },
        {
            content: 'done',
            title: 'Hoàn thành',
        },
        {
            content: 'cancelled',
            title: 'Đã hủy',
        },
    ];

    const listSearch = ['Mã đơn hàng', 'Tên người mua', 'Sản phẩm'];

    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Quản lý đơn hàng</p>
            <div className={cx('content')}>
                <HeaderSelect
                    listHeader={listHeader}
                    contentSelected={contentSelected}
                    setContentSelected={setContentSelected}
                />
                <div className={cx('search-order')}>
                    <WrapperHover
                        noIcon
                        content={listSearch}
                        onClick={(index) => setSelectedSearch(index)}
                        classNameContent={cx('wrapper-list-search')}
                        className={cx('list-search')}
                    >
                        <div className={cx('search')}>
                            <span className={cx('search-current')}>{listSearch[selectedSearch]}</span>
                            <DownIcon />
                        </div>
                    </WrapperHover>
                    <input placeholder={`Nhập ${listSearch[selectedSearch]}`} />
                </div>
                <div className={cx('order')}>
                    {contentSelected === 'all' ||
                    orders.filter((order) => order.allStatus === contentSelected).length > 0 ? (
                        orders?.map((order, index) => (
                            <OrderItem data={order} key={index} myShop status={contentSelected} />
                        ))
                    ) : (
                        <div className={cx('not-found')}>
                            <BillIcon />
                            <span>Không tìm thấy đơn hàng</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ManageOrder;
