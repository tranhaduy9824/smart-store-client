import classNames from 'classnames/bind';
import styles from './ManageReview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import images from '~/assets/images';
import RatingStar from '~/components/RatingStar';

const cx = classNames.bind(styles);

function ManageReview() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('review-shop')}>
                <p className={cx('title')}>Đánh giá Shop</p>
                <div className={cx('box-top')}>
                    <div className={cx('item')}>
                        <span>Tổng lượt đánh giá</span>
                        <span>0</span>
                    </div>
                    <div className={cx('item')}>
                        <span>Tỷ lệ đánh giá đơn hàng</span>
                        <span>0%</span>
                    </div>
                    <div className={cx('item')}>
                        <span>Tỷ lệ đánh giá tốt</span>
                        <span>0%</span>
                    </div>
                </div>
                <div className={cx('box-bottom')}>
                    <div className={cx('item')}>
                        <span>Đánh giá tiêu cực cần phản hồi</span>
                        <span>
                            0{' '}
                            <span>
                                Xem <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </span>
                        <p>Các đánh giá có 1 & 2 sao cần bạn cải thiện</p>
                    </div>
                    <div className={cx('item')}>
                        <span>Đánh giá gần đây</span>
                        <span>
                            0{' '}
                            <span>
                                Xem <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </span>
                        <p>Đánh giá mới được cập nhật từ lần truy cập trước</p>
                    </div>
                </div>
            </div>
            <div className={cx('list-review')}>
                <p className={cx('title')}>Danh sách đánh giá shop</p>
                <div className={cx('number-star')}>
                    <span>Số sao đánh giá</span>
                    <div className={cx('item-star')}>
                        <input id="all-star" type="checkbox" value="all" />
                        <label htmlFor="all-star">Tất cả</label>
                    </div>
                    <div className={cx('item-star')}>
                        <input id="five-star" value="5" type="checkbox" />
                        <label htmlFor="five-star">5 sao (0)</label>
                    </div>
                    <div className={cx('item-star')}>
                        <input id="four-star" value="4" type="checkbox" />
                        <label htmlFor="four-star">4 sao (0)</label>
                    </div>
                    <div className={cx('item-star')}>
                        <input id="three-star" value="3" type="checkbox" />
                        <label htmlFor="three-star">3 sao (0)</label>
                    </div>
                    <div className={cx('item-star')}>
                        <input id="two-star" value="2" type="checkbox" />
                        <label htmlFor="two-star">2 sao (0)</label>
                    </div>
                    <div className={cx('item-star')}>
                        <input id="one-star" value="1" type="checkbox" />
                        <label htmlFor="one-star">1 sao (0)</label>
                    </div>
                </div>
                <div className={cx('search')}>
                    <input id="search" placeholder="Nhập tên sản phẩm" type="text" />
                    <div className={cx('select-time')}>
                        <label>Thời gian đánh giá</label>
                        <div className={cx('quick-select')}>
                            <select
                                value={selectedOption}
                                onChange={(e) => {
                                    const option = e.target.value;
                                    switch (option) {
                                        case 'today':
                                            setStartDate(new Date());
                                            setEndDate(new Date());
                                            break;
                                        case 'last7days':
                                            setStartDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
                                            setEndDate(new Date());
                                            break;
                                        case 'last30days':
                                            setStartDate(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
                                            setEndDate(new Date());
                                            break;
                                        default:
                                            setStartDate(null);
                                            setEndDate(null);
                                            break;
                                    }
                                    setSelectedOption(option);
                                }}
                            >
                                <option value="">Chọn thời gian</option>
                                <option value="today">Hôm nay</option>
                                <option value="last7days">7 ngày</option>
                                <option value="last30days">30 ngày</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('search-btn')}>Tìm kiếm</div>
                </div>
                <div className={cx('reviews')}>
                    <table>
                        <thead>
                            <tr>
                                <th>Ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Đánh giá</th>
                                <th>Nội dung đánh giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={images.background_slide} alt="Ảnh" />
                                </td>
                                <td>
                                    <p className={cx('name')}>Quần thể thao nam nữ in chử NUTRENT thun nỉ dày mịn.</p>
                                </td>
                                <td>
                                    <RatingStar rating={4.5} />
                                </td>
                                <td>
                                    <p className={cx('review-text')}>Thật tuyệt vời</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={images.background_slide} alt="Ảnh" />
                                </td>
                                <td>
                                    <p className={cx('name')}>Quần thể thao nam nữ in chử NUTRENT thun nỉ dày mịn.</p>
                                </td>
                                <td>
                                    <RatingStar rating={4.5} />
                                </td>
                                <td>
                                    <p className={cx('review-text')}>Thật tuyệt vời</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={images.background_slide} alt="Ảnh" />
                                </td>
                                <td>
                                    <p className={cx('name')}>Quần thể thao nam nữ in chử NUTRENT thun nỉ dày mịn.</p>
                                </td>
                                <td>
                                    <RatingStar rating={4.5} />
                                </td>
                                <td>
                                    <p className={cx('review-text')}>Thật tuyệt vời</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ManageReview;
