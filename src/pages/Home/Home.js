import { useEffect, useState } from 'react';
import { useGesture } from 'react-use-gesture';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import WrapperSlide from '~/components/WrapperSlide';

const cx = classNames.bind(styles);

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeDelay, setTimeDelay] = useState(4000);
    const slides = [
        {
            name: 'Famart Farmhouse Soft White',
            price: 20.0,
            sale: 20,
        },
        {
            name: 'Famart Farmhouse Soft White',
            price: 20.0,
            sale: 20,
        },
        {
            name: 'Famart Farmhouse Soft White',
            price: 20.0,
            sale: 20,
        },
        {
            name: 'Famart Farmhouse Soft White',
            price: 20.0,
            sale: 20,
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeDelay(4000);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setTimeDelay(4000);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-slide')}>
                <WrapperSlide
                    data={slides}
                    setCurrentIndex={setCurrentIndex}
                    timeDelay={timeDelay}
                    setTimeDelay={setTimeDelay}
                    className={cx('list-slide')}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                >
                    {slides.map((item, index) => (
                        <div
                            key={index}
                            className={cx('slide-item', { active: index === currentIndex })}
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
                                <img src={images.test} alt="Image" />
                            </div>
                        </div>
                    ))}
                </WrapperSlide>
                <div className={cx('controls')}>
                    <button className={cx('prev')} onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className={cx('next')} onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
                <img src={images.background_slide} alt="Background slide" className={cx('background-slide')} />
            </div>
            <div className={cx('box-categories')}></div>
            <div className={cx('box-recommend')}></div>
            <div className={cx('box-new')}></div>
        </div>
    );
}

export default Home;
