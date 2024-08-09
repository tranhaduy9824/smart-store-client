/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ProductItem from '~/components/ProductItem';
import Pagination from '~/components/Pagination';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faRocketchat, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { LocalIcon, MailIcon, PhoneIcon, ProductIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Shop() {
    const { state } = useLocation();
    const { avatar, productShop, shop } = state;

    useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('shop')}>
                <div className={cx('item-info')}>
                    <div className={cx('avatar-name')}>
                        <img src={avatar} alt="Ảnh" />
                        <div className={cx('name')}>
                            <h1>{shop?.name}</h1>
                            <div>Cửa hàng</div>
                        </div>
                    </div>
                    <div className={cx('control')}>
                        <Button
                            className={cx('chat')}
                            onClick={() => {}}
                            iconLeft={<FontAwesomeIcon icon={faRocketchat} />}
                        >
                            Chat
                        </Button>
                    </div>
                </div>
                <div className={cx('item-info')}>
                    <div>
                        <ProductIcon /> Số sản phẩm:
                        <span>{productShop?.length}</span>
                    </div>
                    <div>
                        <PhoneIcon /> Số điện thoại:
                        <span>{shop?.phone}</span>
                    </div>
                    <div>
                        <MailIcon /> Email:
                        <span>{shop?.email}</span>
                    </div>
                </div>
                <div className={cx('item-info')}>
                    <div>
                        <LocalIcon /> Địa chỉ: <span>{shop?.address}</span>
                    </div>
                    <div className={cx('social')}>
                        <span>Nền tảng khác: </span>
                        {shop?.socialMediaUrls?.facebook && (
                            <a href={shop?.socialMediaUrls?.facebook} className={cx('fb')}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        )}
                        {shop?.socialMediaUrls?.instagram && (
                            <a href={shop?.socialMediaUrls?.instagram} className={cx('ins')}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        )}
                        {shop?.socialMediaUrls?.twitter && (
                            <a href={shop?.socialMediaUrls?.twitter} className={cx('twitter')}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        )}
                        {shop?.socialMediaUrls?.tiktok && (
                            <a href={shop?.socialMediaUrls?.tiktok} className={cx('tik')}>
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx('des')}>
                <h2 className={cx('title')}>Mô tả</h2>
                <p dangerouslySetInnerHTML={{ __html: shop?.description.replace(/\n/g, '<br>') }}></p>
            </div>
            <div className={cx('product-shop')}>
                <h2 className={cx('title')}>Sản phẩm của shop</h2>
                <div className={cx('list-product')}>
                    <Pagination data={productShop} limit={10}>
                        {({ item, index }) => (
                            <ProductItem numberSnippet={50} item={item} index={index} className={cx('product-item')} />
                        )}
                    </Pagination>
                </div>
            </div>
        </div>
    );
}

export default Shop;
