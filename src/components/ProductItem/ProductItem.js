import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import RatingStar from '../RatingStar';
import Button from '../Button';
import { QuickViewIcon } from '../Icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFull } from '@fortawesome/free-solid-svg-icons';
import WrapperModel from '../WrapperModel';
import { formatPrice } from '~/handle/formatPrice';
import snippet from '~/handle/snippet';

const cx = classNames.bind(styles);

function ProductItem({ data = [], index, item, currentIndex, numberSnippet = 10, className }) {
    const [quantityValue, setQuantityValue] = useState(1);
    const [isFavourite, setIsFavourite] = useState(false);
    const [showQuickView, setShowQuickView] = useState(false);
    const [imageCurrent, setImageCurrent] = useState(0);

    const getTransform = (index, currentIndex) => {
        if (data.length > 6) {
            return `translateX(-${currentIndex * 100}%`;
        }
        return 'none';
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

    const price = formatPrice(item.price);
    const priceSale = formatPrice((item.price * (100 - item.sale)) / 100);
    const priceQuantity = formatPrice(item.price * quantityValue);
    const priceSaleQuantity = formatPrice(((item.price * (100 - item.sale)) / 100) * quantityValue);

    return (
        <>
            <div
                className={cx('box-item', { [className]: className })}
                key={index}
                style={{
                    transform: getTransform(index, currentIndex),
                }}
            >
                <div className={cx('image')}>
                    <NavLink>
                        <img src={item.images[0]} alt="Image" />
                    </NavLink>
                </div>
                <div className={cx('content')}>
                    <h2 className={cx('name')}>
                        <NavLink>{item.name}</NavLink>
                    </h2>
                    <div className={cx('rating')}>
                        <RatingStar rating={item.rating} />
                        <span>({item.numberRating})</span>
                    </div>
                    <div className={cx('price')}>
                        {item.sale ? (
                            <>
                                <span className={cx('sale-price')}>{priceSale}</span>
                                <del>
                                    <i>
                                        <span className={cx('price-old')}>{snippet(price.concat(priceSale), numberSnippet - priceSale.length, price)}</span>
                                    </i>
                                </del>
                            </>
                        ) : (
                            <span className={cx('price')}>{price}</span>
                        )}
                    </div>
                </div>
                <div className={cx('box-add-cart')}>
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
                        Total: <span>{!item.sale ? priceQuantity : priceSaleQuantity}</span>
                    </div>
                    <Button className={cx('btn-add-cart')}>Thêm giỏ hàng</Button>
                </div>
                <div className={cx('btn-action')}>
                    <span onClick={() => setShowQuickView(true)}>
                        <QuickViewIcon />
                    </span>
                    <span onClick={() => setIsFavourite(!isFavourite)}>
                        {!isFavourite ? (
                            <FontAwesomeIcon icon={faHeart} />
                        ) : (
                            <FontAwesomeIcon icon={faHeartFull} className={cx('is-favourite')} />
                        )}
                    </span>
                </div>
            </div>
            <WrapperModel
                classNameContent={cx('box-content')}
                show={showQuickView}
                onClose={() => setShowQuickView(false)}
                className={cx('box-quick-view')}
                classIcon={cx('icon-close')}
            >
                <div className={cx('box-image')}>
                    <img src={item.images[imageCurrent]} alt="Image" className={cx('image-selected')} />
                    <div className={cx('list-image')}>
                        {item.images.map((image, index) => (
                            <img src={image} alt="Image" onClick={() => setImageCurrent(index)} className={cx({ 'current-image': imageCurrent === index })} />
                        ))}
                    </div>
                </div>
                <div className={cx('box-info')}>
                    <h2>{item.name}</h2>
                    <div className={cx('rating')}>
                        <RatingStar rating={item.rating} />
                        <span className={cx('number-rating')}>({item.numberRating})</span>
                    </div>
                    <div className={cx('price')}>
                        {item.sale ? (
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
                        Total: <span>{!item.sale ? priceQuantity : priceSaleQuantity}</span>
                    </div>
                    <Button className={cx('btn-add-cart')}>Thêm giỏ hàng</Button>
                </div>
            </WrapperModel>
        </>
    );
}

export default ProductItem;
