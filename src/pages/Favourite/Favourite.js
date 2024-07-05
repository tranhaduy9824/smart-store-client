import classNames from 'classnames/bind';
import styles from './Favourite.module.scss';
import { NavLink } from 'react-router-dom';
import images from '~/assets/images';
import Pagination from '~/components/Pagination';
import ProductItem from '~/components/ProductItem';

const cx = classNames.bind(styles);

function Favourite() {
    const listFavourite = [
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
    ];

    return (
        <div className={cx('wrapper')}>
            <h1>Yêu thích</h1>
            <div className={cx('site')}>
                <NavLink to="/" className={cx('navigate')}>
                    Trang chủ
                </NavLink>
                <span> / </span>
                <NavLink>Yêu thích</NavLink>
            </div>
            <div className={cx('content')}>
                <div className={cx('grid-product')}>
                    <Pagination data={listFavourite} limit={10}>
                        {({ item, index }) => (
                            <ProductItem numberSnippet={50} item={item} index={index} className={cx('product-item')} />
                        )}
                    </Pagination>
                </div>
            </div>
        </div>
    );
}

export default Favourite;
