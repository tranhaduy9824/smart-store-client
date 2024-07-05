import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import images from '~/assets/images';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import WrapperHover from '~/components/WrapperHover';
import WrapperModel from '~/components/WrapperModel';
import BoxInput from '~/components/BoxInput';
import OrderItem from '~/components/OrderItem';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddressItem from './AddressItem';

const cx = classNames.bind(styles);

function Profile() {
    const [isEditFullname, setIsEditFullname] = useState(false);
    const [isEditEmail, setIsEditEmail] = useState(false);
    const [isEditPhone, setIsEditPhone] = useState(false);
    const [fullname, setFullname] = useState('Hà Duy Nè');
    const [email, setEmail] = useState('tranhaduy204@gmail.com');
    const [phone, setPhone] = useState('0867125575');
    const refFullname = useRef(null);
    const refEmail = useRef(null);
    const refPhone = useRef(null);
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPasswrod, setConfirmNewPassword] = useState('');
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [contentSelected, setContentSelected] = useState(0);

    useEffect(() => {
        if (isEditFullname) {
            refFullname.current.focus();
        }
    }, [isEditFullname]);

    useEffect(() => {
        if (isEditEmail) {
            refEmail.current.focus();
        }
    }, [isEditEmail]);

    useEffect(() => {
        if (isEditPhone) {
            refPhone.current.focus();
        }
    }, [isEditPhone]);

    const handleChangePassword = () => {};

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleChangePassword();
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('info')}>
                    <div className={cx('avatar')}>
                        <WrapperHover
                            noIcon
                            content={
                                <div>
                                    <label for="avatar">Chọn ảnh</label>
                                    <input type="file" id="avatar" />
                                </div>
                            }
                            classNameContent={cx('update-avatar')}
                            classNameWrapper={cx('update-avatar-wrapper')}
                        >
                            <img src={images.background_slide} alt="Avatar" />
                        </WrapperHover>
                    </div>
                    <div className={cx('box-fullname')}>
                        <div className={cx('fullname')}>
                            <input
                                ref={refFullname}
                                disabled={!isEditFullname}
                                value={fullname}
                                onChange={(e) => {
                                    setFullname(e.target.value);
                                }}
                                onBlur={() => {
                                    setIsEditFullname(false);
                                }}
                                style={{
                                    width: `${fullname.length}ch`,
                                }}
                            />
                            <span
                                onClick={() => {
                                    setIsEditFullname(true);
                                }}
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </span>
                        </div>
                    </div>
                    <span>Thành viên</span>
                    <div className={cx('change-info')}>
                        <div className={cx('change-item')}>
                            <div className={cx('item')}>
                                <label>Email:</label>
                                <input
                                    type="text"
                                    value={email}
                                    ref={refEmail}
                                    disabled={!isEditEmail}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    onBlur={() => {
                                        setIsEditEmail(false);
                                    }}
                                    style={{
                                        width: `${email.length}ch`,
                                    }}
                                />
                            </div>
                            <span
                                onClick={() => {
                                    setIsEditEmail(true);
                                }}
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </span>
                        </div>
                        <div className={cx('change-item')}>
                            <div className={cx('item')}>
                                <label>Số điện thoại:</label>
                                <input
                                    className={cx('phone-input')}
                                    type="text"
                                    value={phone}
                                    ref={refPhone}
                                    disabled={!isEditPhone}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                    }}
                                    onBlur={() => {
                                        setIsEditPhone(false);
                                    }}
                                    style={{
                                        width: `${phone.length}ch`,
                                    }}
                                />
                            </div>
                            <span
                                onClick={() => {
                                    setIsEditPhone(true);
                                }}
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </span>
                        </div>
                        <div className={cx('change-password')} onClick={() => setShowChangePassword(true)}>
                            <FontAwesomeIcon icon={faEdit} />
                            Đổi mật khẩu
                        </div>
                    </div>
                </div>
                <div className={cx('box-content')}>
                    <div className={cx('header')}>
                        <div
                            className={cx('header-item', { selected: contentSelected === 0 })}
                            onClick={() => setContentSelected(0)}
                        >
                            Chờ xác nhận
                        </div>
                        <div
                            className={cx('header-item', { selected: contentSelected === 1 })}
                            onClick={() => setContentSelected(1)}
                        >
                            Đang vận chuyển
                        </div>
                        <div
                            className={cx('header-item', { selected: contentSelected === 2 })}
                            onClick={() => setContentSelected(2)}
                        >
                            Hoàn thành
                        </div>
                        <div
                            className={cx('header-item', { selected: contentSelected === 3 })}
                            onClick={() => setContentSelected(3)}
                        >
                            Đã hủy
                        </div>
                        <div
                            className={cx('header-item', { selected: contentSelected === 4 })}
                            onClick={() => setContentSelected(4)}
                        >
                            Địa chỉ nhận hàng
                        </div>
                    </div>
                    <div className={cx('content')}>
                        {contentSelected < 4 ? (
                            <div className={cx('order')}>
                                <OrderItem />
                                <OrderItem />
                                <OrderItem />
                                <OrderItem />
                            </div>
                        ) : (
                            <div className={cx('address')}>
                                <div className={cx('title')}>
                                    <p>Địa chỉ của tôi</p>
                                    <div className={cx('add-address')}>
                                        <FontAwesomeIcon icon={faPlus} /> Thêm địa chỉ mới
                                    </div>
                                </div>
                                <div className={cx('list-address')}>
                                    <p>Địa chỉ</p>
                                    <AddressItem />
                                    <AddressItem />
                                    <AddressItem />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <WrapperModel
                classNameContent={cx('model-change-pw')}
                show={showChangePassword}
                onClose={() => setShowChangePassword(false)}
            >
                <p className={cx('title')}>Đổi mật khẩu</p>
                <BoxInput
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e)}
                    label="Mật khẩu mới"
                    className={cx('input')}
                    isPassword
                />
                <BoxInput
                    value={confirmNewPasswrod}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e)}
                    label="Xác nhận mật khẩu mới"
                    className={cx('input')}
                    isPassword
                />
                <div className={cx('btn-change-pw')}>Đổi mật khẩu</div>
            </WrapperModel>
        </>
    );
}

export default Profile;
