import classNames from 'classnames/bind';
import styles from './Overview.module.scss';
import RevenueAnalysisChart from '../RevenueAnalysisChart';

const cx = classNames.bind(styles);

function Overview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('need-do')}>
                <p className={cx('title')}>Danh sách cần làm</p>
                <p>Nhưng việc bạn sẽ phải làm</p>
                <div className={cx('list')}>
                    <div className={cx('item')}>
                        <p>0</p>
                        <p>Chờ xác nhận</p>
                    </div>
                    <div className={cx('item')}>
                        <p>0</p>
                        <p>Đang vận chuyển</p>
                    </div>
                    <div className={cx('item')}>
                        <p>0</p>
                        <p>Hoàn thành</p>
                    </div>
                    <div className={cx('item')}>
                        <p>0</p>
                        <p>Đã hủy</p>
                    </div>
                    <div className={cx('item')}>
                        <p>0</p>
                        <p>Hoàn tiền</p>
                    </div>
                    <div className={cx('item')}>
                        <p>0</p>
                        <p>Sản phẩm chờ xác nhận</p>
                    </div>
                    <div className={cx('item')}>
                        <p>0</p>
                        <p>Sản phẩm hết hàng</p>
                    </div>
                </div>
            </div>
            <div className={cx('revenue-analysis')}>
                <p className={cx('title')}>Phân tích doanh thu</p>
                <p>Tổng quan doanh thu của shop đối với đơn hàng đã hoàn thành</p>
                <RevenueAnalysisChart />
            </div>
        </div>
    );
}

export default Overview;
