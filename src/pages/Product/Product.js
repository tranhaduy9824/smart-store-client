import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { BarsIcon, DownIcon, GridIcon } from '~/components/Icons';
import WrapperHover from '~/components/WrapperHover';
import { NavLink } from 'react-router-dom';
import { formatPrice } from '~/handle/formatPrice';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import ProductItem from '~/components/ProductItem';

const cx = classNames.bind(styles);

function Product() {
    const [showCategorySub, setShowCategorySub] = useState([]);
    const [typeSort, setTypeSort] = useState(0);
    const [typeViewList, setTypeViewList] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const listSort = [
        'Sắp xếp mặc định',
        'Sắp xếp theo độ phổ biến',
        'Sắp xếp theo đánh giá',
        'Sắp xếp theo mới nhất',
        'Sắp xếp theo giá: thấp -> cao',
        'Sắp xếp theo giá: cao -> thấp',
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

    const listProduct = [
        {
            images: [images.test, images.background_slide, images.check_email_image],
            name: 'Famart Farmhouse Soft White',
            price: 20000,
            sale: 20,
            rating: 3.5,
            numberRating: 2,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 13000,
            rating: 3,
            numberRating: 1,
        },
        {
            images: [images.test, images.background_slide, images.check_email_image],
            name: 'Famart Farmhouse Soft White',
            price: 10000,
            rating: 5,
            numberRating: 0,
        },
        {
            images: [images.test, images.background_slide, images.check_email_image],
            name: 'Famart Farmhouse Soft White',
            price: 54000,
            sale: 35,
            rating: 2.4,
            numberRating: 10,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 150000,
            sale: 10,
            rating: 4.5,
            numberRating: 3,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 15000,
            sale: 10,
            rating: 5,
            numberRating: 5,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 15000,
            sale: 10,
            rating: 4.2,
            numberRating: 4,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 15000,
            sale: 10,
            rating: 5,
            numberRating: 0,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 15000,
            sale: 10,
            rating: 4.2,
            numberRating: 16,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 15000,
            sale: 10,
            rating: 4.2,
            numberRating: 4,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 15000,
            sale: 10,
            rating: 4.2,
            numberRating: 16,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 15000,
            sale: 10,
            rating: 4.2,
            numberRating: 16,
        },
    ];

    const handleSpanClick = (index) => {
        setShowCategorySub((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const limit = 10;
    const startNumber = (currentPage - 1) * limit;
    const toNumber = startNumber + limit;

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
                            onClick={(index) => setTypeSort(index)}
                            classNameContent={cx('wrapper-list-sort')}
                            className={cx('list-sort')}
                        >
                            <div className={cx('sort')}>
                                <span className={cx('sort-current')}>{listSort[typeSort]}</span>
                                <DownIcon />
                            </div>
                        </WrapperHover>
                    </div>
                    <div className={cx('box-view')}>
                        <span className={cx('label-control')}>Xem</span>
                        <div className={cx('view')}>
                            <span
                                className={cx('grid-icon', { selected: !typeViewList })}
                                onClick={() => setTypeViewList(false)}
                            >
                                <GridIcon />
                            </span>
                            <span
                                className={cx('bars-icon', { selected: typeViewList })}
                                onClick={() => setTypeViewList(true)}
                            >
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
                                            {!showCategorySub[index] ? (
                                                <FontAwesomeIcon icon={faChevronDown} />
                                            ) : (
                                                <FontAwesomeIcon icon={faChevronUp} />
                                            )}
                                        </span>
                                    </li>
                                    <ul key={index} className={cx('category-sub', { show: showCategorySub[index] })}>
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
                <div className={cx('content')}>
                    <div className={cx({ 'list-product': typeViewList, 'grid-product': !typeViewList })}>
                        {listProduct.slice(startNumber, toNumber).map((item, index) => (
                            <ProductItem numberSnippet={50} item={item} index={index} className={cx('product-item')} />
                        ))}
                    </div>
                    <div className={cx('list-page')}>
                        {[...Array(Math.ceil((listProduct.length + 1) / limit))].map((_, index) => (
                            <div
                                className={cx('btn-page-change', { 'current-page': index + 1 === currentPage })}
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
