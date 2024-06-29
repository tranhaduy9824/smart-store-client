import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import images from '~/assets/images';
import { useState } from 'react';
import Button from '~/components/Button';
import { faChevronRight, faHeart as faHeartFull, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '~/handle/formatPrice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RatingStar from '~/components/RatingStar';
import { CartIcon } from '~/components/Icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import Comments from './Comments';
import ProductItem from '~/components/ProductItem';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductDetail() {
    const [imageCurrent, setImageCurrent] = useState(0);
    const [quantityValue, setQuantityValue] = useState(1);
    const [isFavourite, setIsFavourite] = useState(false);

    const data = {
        images: [images.test, images.background_slide, images.check_email_image],
        name: 'Famart Farmhouse Soft White',
        price: 20000,
        sale: 20,
        rating: 3.5,
        numberRating: 2,
    };

    const minusQuantity = () => {
        if (!quantityValue.trim && quantityValue > 1) {
            setQuantityValue(quantityValue - 1);
        } else {
            setQuantityValue(1);
        }
    };

    const plusQuantity = () => {
        if (!quantityValue.trim) {
            setQuantityValue(quantityValue + 1);
        } else {
            setQuantityValue(1);
        }
    };

    const price = formatPrice(data.price);
    const priceSale = formatPrice((data.price * (100 - data.sale)) / 100);
    const priceQuantity = formatPrice(data.price * quantityValue);
    const priceSaleQuantity = formatPrice(((data.price * (100 - data.sale)) / 100) * quantityValue);

    const productOfShop = [
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
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('box-image')}>
                    <img src={data.images[imageCurrent]} alt="Image" className={cx('image-selected')} />
                    <div className={cx('list-image')}>
                        {data.images.map((image, index) => (
                            <img
                                src={image}
                                alt="Image"
                                onClick={() => setImageCurrent(index)}
                                className={cx({ 'current-image': imageCurrent === index })}
                            />
                        ))}
                    </div>
                    <div className={cx('btn-action')}>
                        <span onClick={() => setIsFavourite(!isFavourite)}>
                            {!isFavourite ? (
                                <FontAwesomeIcon icon={faHeart} />
                            ) : (
                                <FontAwesomeIcon icon={faHeartFull} className={cx('is-favourite')} />
                            )}
                        </span>
                    </div>
                </div>
                <div className={cx('info-product')}>
                    <h2>{data.name}</h2>
                    <div className={cx('rating')}>
                        <RatingStar rating={data.rating} />
                        <span className={cx('number-rating')}>({data.numberRating})</span>
                    </div>
                    <div className={cx('price')}>
                        {data.sale ? (
                            <>
                                <span className={cx('sale-price')}>{priceSale}</span>
                                <del>
                                    <i>
                                        <span className={cx('price-old')}>{price}</span>
                                    </i>
                                </del>
                            </>
                        ) : (
                            <span className={cx('price')}>{price}</span>
                        )}
                    </div>
                    <div className={cx('des')}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget
                        consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus.
                    </div>
                    <h3>Quantity</h3>
                    <div className={cx('box-quantity')}>
                        <span onClick={minusQuantity}>
                            <FontAwesomeIcon icon={faMinus} />
                        </span>
                        <input type="number" value={quantityValue} onChange={(e) => setQuantityValue(e.target.value)} />
                        <span onClick={plusQuantity}>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </div>
                    <div className={cx('total')}>
                        Total: <span>{!data.sale ? priceQuantity : priceSaleQuantity}</span>
                    </div>
                    <div className={cx('box-btn')}>
                        <Button className={cx('btn-add-cart')} iconLeft={<CartIcon />} onClick={() => {}}>
                            Thêm giỏ hàng
                        </Button>
                        <Button className={cx('btn-buy')}>Mua ngay</Button>
                    </div>
                    <h3>Shop</h3>
                    <div className={cx('info-shop')}>
                        <img src={images.test} alt="Image shop" />
                        <div className={cx('content-shop')}>
                            <h3>HaduyNe</h3>
                            <p>Số sản phẩm: 10</p>
                        </div>
                        <div className={cx('btn-shop')}>
                            <Button
                                className={cx('chat')}
                                onClick={() => {}}
                                iconLeft={<FontAwesomeIcon icon={faRocketchat} />}
                            >
                                Chat Ngay
                            </Button>
                            <Button className={cx('view-shop')}>Xem shop</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Comments />
            <div className={cx('box-product-shop')}>
                <div className={cx('title')}>
                    <h2>Các sản phẩm khác của shop</h2>
                    <NavLink>
                        Xem tất cả <FontAwesomeIcon icon={faChevronRight} />
                    </NavLink>
                </div>
                <div className={cx('list-product')}>
                    {productOfShop.map((item, index) => (
                        <ProductItem numberSnippet={50} item={item} index={index} className={cx('product-item')} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
