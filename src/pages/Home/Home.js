import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import WrapperSlide from '~/components/WrapperSlide';
import { NavLink } from 'react-router-dom';
import { CarIcon, ElectronicIcon, FashionIcon, FoodIcon, HousewareIcon } from '~/components/Icons';
import SlideHome from './SlideHome';
import ProductItem from '~/components/ProductItem';
import snippet from '~/handle/snippet';
import { ProductContext } from '~/context/ProductContext';
import { formatPrice } from '~/handle/formatPrice';

const cx = classNames.bind(styles);

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexCategory, setCurrentIndexCategory] = useState(0);
    const [currentIndexRecommend, setCurrentIndexRecommend] = useState(0);
    const [currentIndexNews, setCurrentIndexNews] = useState(0);

    const { saleProducts, newProducts } = useContext(ProductContext);

    const categoriesMain = ['Thời trang', 'Thiết bị điện tử', 'Xe', 'Đồ ăn', 'Đồ gia dụng'];

    const IconComponents = {
        'Thời trang': FashionIcon,
        'Thiết bị điện tử': ElectronicIcon,
        Xe: CarIcon,
        'Đồ ăn': FoodIcon,
        'Đồ gia dụng': HousewareIcon,
    };

    const listRecommend = [
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
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 10000,
            rating: 5,
            numberRating: 0,
        },
        {
            images: [images.test],
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
    ];

    const handlePrevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + saleProducts.length) % saleProducts.length);
    };

    const handleNextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % saleProducts.length);
    };

    const getCategoryTransform = (index, currentIndexCategory) => {
        if (categoriesMain.length > 8) {
            return `translateX(calc(-${currentIndexCategory * 100}% - ${currentIndexCategory * 30}px))`;
        }
        return 'none';
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-slide')}>
                <WrapperSlide
                    data={saleProducts}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    timeDelay={4000}
                    className={cx('list-slide')}
                    handlePrev={handlePrevSlide}
                    handleNext={handleNextSlide}
                >
                    {saleProducts &&
                        saleProducts.map((item, index) => (
                            <div
                                key={index}
                                className={cx('slide-item')}
                                style={{
                                    transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 20}px))`,
                                }}
                            >
                                <div className={cx('content')}>
                                    <h2 className={cx('heading')}>Giảm giá {item.sale}%</h2>
                                    <h3 className={cx('name')}>{item.name}</h3>
                                    <p className={cx('price')}>
                                        <span>{formatPrice((item.price * (100 - item.sale)) / 100)}</span>
                                        <i>
                                            <del>{formatPrice(item.price)}</del>
                                        </i>
                                    </p>
                                    <Button className={cx('btn-buy')}>Mua ngay</Button>
                                </div>
                                <div className={cx('image')}>
                                    <img src={item.files.photos[0]} alt="Image" />
                                </div>
                            </div>
                        ))}
                </WrapperSlide>
                <div className={cx('controls')}>
                    <button className={cx('prev')} onClick={handlePrevSlide}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className={cx('next')} onClick={handleNextSlide}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
                <img src={images.background_slide} alt="Background slide" className={cx('background-slide')} />
            </div>
            <div className={cx('box-categories')}>
                <SlideHome
                    data={categoriesMain}
                    setCurrentIndex={setCurrentIndexCategory}
                    showNumber={8}
                    title="Tìm kiếm bằng danh mục"
                    subTitle="Xem tất cả"
                    link="/product"
                >
                    {categoriesMain.map((item, index) => (
                        <div
                            className={cx('item-category')}
                            key={index}
                            style={{
                                transform: getCategoryTransform(index, currentIndexCategory),
                            }}
                        >
                            <NavLink>
                                {React.createElement(IconComponents[item] || 'div')}
                                <p>{snippet(item, 6)}</p>
                            </NavLink>
                        </div>
                    ))}
                </SlideHome>
            </div>
            <div className={cx('box-recommend')}>
                <div className={cx('recommend')}>
                    <SlideHome
                        data={newProducts}
                        setCurrentIndex={setCurrentIndexRecommend}
                        showNumber={5}
                        title="Gợi ý"
                        subTitle="Xem tất cả"
                        link="/product"
                        classNameSlide={cx('list-recommend')}
                    >
                        {newProducts && newProducts.map((item, index) => (
                            <ProductItem
                                data={newProducts}
                                item={item}
                                index={index}
                                currentIndex={currentIndexRecommend}
                            />
                        ))}
                    </SlideHome>
                </div>
            </div>
            <div className={cx('box-news')}>
                <div className={cx('news')}>
                    <SlideHome
                        data={newProducts}
                        setCurrentIndex={setCurrentIndexNews}
                        showNumber={5}
                        title="Mới nhất"
                        subTitle="Xem tất cả"
                        link="/product"
                        classNameSlide={cx('list-news')}
                    >
                        {newProducts && newProducts.map((item, index) => (
                            <ProductItem
                                data={newProducts}
                                item={item}
                                index={index}
                                currentIndex={currentIndexNews}
                            />
                        ))}
                    </SlideHome>
                </div>
            </div>
        </div>
    );
}

export default Home;
