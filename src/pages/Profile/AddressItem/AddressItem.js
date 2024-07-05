import classNames from 'classnames/bind';
import styles from './AddressItem.module.scss';

const cx = classNames.bind(styles);

function AddressItem({ data, className }) {
    return (
        <div className={cx('wrapper', { [className]: className })}>
            <div className={cx('box-left')}>
                <div className={cx('info-user')}>
                    <span className={cx('name')}>Trần Hà Duy</span>
                    <span className={cx('phone-number')}>| 0867125575</span>
                </div>
                <div className={cx('info-address')}>
                    <p>Thôn Lâm Yên Đại Minh Đại Lộc Quảng Nam Vietnam</p>
                    <p>Xã Đại Minh, Huyện Đại Lộc, Quảng Nam</p>
                </div>
                <div className={cx('default-address')}>Mặc định</div>
            </div>
            <div className={cx('box-right')}>
                <div className={cx('action-text')}>
                    <div>Cập nhập</div>
                    <div>Xóa</div>
                </div>
                <div className={cx('change-default')}>Thiết lập mặc định</div>
            </div>
        </div>
    );
}

export default AddressItem;
