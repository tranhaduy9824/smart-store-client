import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import WrapperSlide from '~/components/WrapperSlide';
import { NavLink } from 'react-router-dom';
import { ElectronicIcon, FashionIcon, FoodIcon, HousewareIcon } from '~/components/Icons';
import SlideHome from './SlideHome';
import ProductItem from '~/components/ProductItem';

const cx = classNames.bind(styles);

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexCategory, setCurrentIndexCategory] = useState(0);
    const [currentIndexRecommend, setCurrentIndexRecommend] = useState(0);
    const [currentIndexNews, setCurrentIndexNews] = useState(0);
    const slides = [
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 20.0,
            sale: 20,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 20.0,
            sale: 20,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 20.0,
            sale: 20,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 20.0,
            sale: 20,
        },
    ];

    const categoriesMain = [
        'Fashion',
        'Electronic',
        'Food',
        'Houseware',
        'Fashion',
        'Electronic',
        'Food',
        'Houseware',
        'Fashion',
        'Electronic',
        'Food',
        'Houseware',
    ];

    const IconComponents = {
        Fashion: FashionIcon,
        Electronic: ElectronicIcon,
        Food: FoodIcon,
        Houseware: HousewareIcon,
    };

    const listRecommend = [
        {
            images: [images.test, images.background_slide, images.check_email_image],
            name: 'Famart Farmhouse Soft White',
            price: 20.0,
            sale: 20,
            rating: 3.5,
            numberRating: 2,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 13.0,
            rating: 3,
            numberRating: 1,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 10.0,
            rating: 5,
            numberRating: 0,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 54.0,
            sale: 35,
            rating: 2.4,
            numberRating: 10,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 15.0,
            sale: 10,
            rating: 4.5,
            numberRating: 3,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 15.0,
            sale: 10,
            rating: 5,
            numberRating: 5,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 15.0,
            sale: 10,
            rating: 4.2,
            numberRating: 4,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 15.0,
            sale: 10,
            rating: 5,
            numberRating: 0,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 15.0,
            sale: 10,
            rating: 4.2,
            numberRating: 16,
        },
        {
            images: [images.test],
            name: 'Famart Farmhouse Soft White',
            price: 15.0,
            sale: 10,
            rating: 4.2,
            numberRating: 4,
        },
    ];

    const handlePrevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
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
                    data={slides}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    timeDelay={4000}
                    className={cx('list-slide')}
                    handlePrev={handlePrevSlide}
                    handleNext={handleNextSlide}
                >
                    {slides.map((item, index) => (
                        <div
                            key={index}
                            className={cx('slide-item')}
                            style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 20}px))` }}
                        >
                            <div className={cx('content')}>
                                <h2 className={cx('heading')}>{item.sale}% SALE OFF</h2>
                                <h3 className={cx('name')}>{item.name}</h3>
                                <p className={cx('price')}>
                                    <span>${((item.price * (100 - item.sale)) / 100).toFixed(2)}</span>
                                    <i>
                                        <del>${item.price.toFixed(2)}</del>
                                    </i>
                                </p>
                                <Button className={cx('btn-buy')}>Buy Now</Button>
                            </div>
                            <div className={cx('image')}>
                                <img src={item.images[0]} alt="Image" />
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
                    title="Browse by Category"
                    subTitle="All Categories"
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
                                <p>{item}</p>
                            </NavLink>
                        </div>
                    ))}
                </SlideHome>
            </div>
            <div className={cx('box-recommend')}>
                <div className={cx('recommend')}>
                    <SlideHome
                        data={listRecommend}
                        setCurrentIndex={setCurrentIndexRecommend}
                        showNumber={5}
                        title="Recommend"
                        subTitle="All Recommed"
                        link="/product"
                        classNameSlide={cx('list-recommend')}
                    >
                        {listRecommend.map((item, index) => (
                            <ProductItem
                                data={listRecommend}
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
                        data={listRecommend}
                        setCurrentIndex={setCurrentIndexNews}
                        showNumber={5}
                        title="News"
                        subTitle="All News"
                        link="/product"
                        classNameSlide={cx('list-news')}
                    >
                        {listRecommend.map((item, index) => (
                            <ProductItem
                                data={listRecommend}
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
