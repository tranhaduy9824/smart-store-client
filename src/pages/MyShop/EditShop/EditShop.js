import classNames from 'classnames/bind';
import styles from './EditShop.module.scss';
import WrapperHover from '~/components/WrapperHover';
import Avatar from '~/components/Avatar';
import { useContext } from 'react';
import { AuthContext } from '~/context/AuthContext';

const cx = classNames.bind(styles);

function EditShop() {
    const { user, handleUpdate } = useContext(AuthContext);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Chỉnh sửa thông tin</p>
            <p>Quản lý thông tin hồ sơ</p>
            <div className={cx('info')}>
                <div className={cx('avatar')}>
                    <WrapperHover
                        noIcon
                        content={
                            <div>
                                <label htmlFor="avatar">Chọn ảnh</label>
                                <input
                                    type="file"
                                    id="avatar"
                                    onChange={(e) => handleUpdate({ avatar: e.target.files[0] })}
                                />
                            </div>
                        }
                        classNameContent={cx('update-avatar')}
                        classNameWrapper={cx('update-avatar-wrapper')}
                    >
                        <Avatar url={user && user.user.avatar} />
                    </WrapperHover>
                </div>
                <div className={cx('info-text')}>
                    <div className={cx('item-info')}>
                        <label htmlFor="name-shop">Tên cửa hàng</label>
                        <input id="name-shop" />
                    </div>
                    <div className={cx('item-info')}>
                        <label htmlFor="des-shop">Mô tả</label>
                        <textarea id="des-shop" />
                    </div>
                    <div className={cx('item-info')}>
                        <label htmlFor="phone-shop">Số điện thoại</label>
                        <input id="phone-shop" />
                    </div>
                    <div className={cx('item-info')}>
                        <label htmlFor="email-shop">Email</label>
                        <input id="email-shop" />
                    </div>
                    <div className={cx('item-info')}>
                        <label htmlFor="address-shop">Địa chỉ</label>
                        <input id="address-shop" />
                    </div>
                    <div className={cx('item-info')}>
                        <label>Liên kết</label>
                        <div className={cx('socials')}>
                            <div>
                                <label htmlFor="facebook-url">Facebook</label>
                                <input id="facebook-url" />
                            </div>
                            <div>
                                <label htmlFor="instagram-url">Instagram</label>
                                <input id="instagram-url" />
                            </div>
                            <div>
                                <label htmlFor="twitter-url">Twitter</label>
                                <input id="twitter-url" />
                            </div>
                            <div>
                                <label htmlFor="tiktok-url">Tiktok</label>
                                <input id="tiktok-url" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('save-btn')}>Lưu</div>
        </div>
    );
}

export default EditShop;
