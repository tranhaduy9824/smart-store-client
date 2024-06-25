import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { BarsIcon, DownIcon, GridIcon } from '~/components/Icons';
import WrapperHover from '~/components/WrapperHover';
import { NavLink } from 'react-router-dom';
import { formatPrice } from '~/handle/formatPrice';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Product() {
    const [showCategorySub, setShowCategorySub] = useState([]);

    const listSort = [
        'Sắp xếp mặc định',
        'Sắp xếp theo độ phổ biến',
        'Sắp xếp theo đánh gía',
        'Sắp xếp theo mới nhất',
        'Sắp xếp theo giá: thấp đến cao',
        'Sắp xếp theo giá: cao đến thấp',
    ];

    const categories = [
        {
            categoryMain: 'Thời trang',
            categorySub: ['Nam', 'Nữ', 'Khác'],
        },
        {
            categoryMain: 'Thiết bị điện tử',
            categorySub: ['Máy tính', 'Điện thoại', 'Phụ kiện'],
        },
        {
            categoryMain: 'Xe',
            categorySub: ['Xe máy', 'Xe hơi', 'Phụ kiện xe'],
        },
        {
            categoryMain: 'Đồ ăn và thức uống',
            categorySub: ['Đồ ăn', 'Thức uống', 'Nguyên liệu'],
        },
        {
            categoryMain: 'Đồ gia dụng',
            categorySub: ['Nội địa', 'Thiết bị gia dụng', 'Đồ gia dụng nhỏ'],
        },
    ];

    const priceRange = [
        {
            from: 0,
            to: 100000,
        },
        {
            from: 100000,
            to: 200000,
        },
        {
            from: 200000,
            to: 500000,
        },
        {
            from: 500000,
            to: 1000000,
        },
        {
            from: 1000000,
        },
    ];

    const handleSpanClick = (index) => {
        setShowCategorySub((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-product')}>
                <div className={cx('title')}>
                    <h1>Sản phẩm</h1>
                </div>
                <div className={cx('control-content')}>
                    <div className={cx('box-sort')}>
                        <span className={cx('label-control')}>Sắp xếp theo:</span>
                        <WrapperHover
                            noIcon
                            content={listSort}
                            classNameContent={cx('wrapper-list-sort')}
                            className={cx('list-sort')}
                        >
                            <div className={cx('sort')}>
                                <span className={cx('sort-current')}>Sắp xếp mặc định</span>
                                <DownIcon />
                            </div>
                        </WrapperHover>
                    </div>
                    <div className={cx('box-view')}>
                        <span className={cx('label-control')}>Xem</span>
                        <div className={cx('view')}>
                            <span className={cx('grid-icon')}>
                                <GridIcon />
                            </span>
                            <span className={cx('bars-icon')}>
                                <BarsIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('bottom-product')}>
                <div className={cx('sidebar')}>
                    <div className={cx('box-categories')}>
                        <h2>Tất cả danh mục</h2>
                        <ul className={cx('list-category')}>
                            {categories.map((category, index) => (
                                <>
                                    <li key={index} className={cx('category-main')}>
                                        <NavLink>
                                            {category.categoryMain} <span className={cx('number-category-sub')}>6</span>
                                        </NavLink>
                                        <span onClick={() => handleSpanClick(index)}>
                                            {!showCategorySub[index] ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
                                        </span>
                                    </li>
                                    <ul key={index} className={cx('category-sub', { 'show': showCategorySub[index] })}>
                                        {category.categorySub.map((item, index) => (
                                            <li key={index}>
                                                <NavLink>{item}</NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('box-price')}>
                        <h2>Phạm vi giá</h2>
                        <ul className={cx('list-price')}>
                            {priceRange.map((item, index) => (
                                <li key={index}>
                                    {item.to ? (
                                        <NavLink>
                                            {formatPrice(item.from)} - {formatPrice(item.to)}
                                        </NavLink>
                                    ) : (
                                        <NavLink>{formatPrice(item.from)} +</NavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={cx('content')}></div>
            </div>
        </div>
    );
}

export default Product;
