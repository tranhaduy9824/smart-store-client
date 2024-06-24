import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { BarsIcon, DownIcon, GridIcon } from '~/components/Icons';
import WrapperHover from '~/components/WrapperHover';

const cx = classNames.bind(styles);

function Product() {
    const listSort = [
        'Sắp xếp mặc định',
        'Sắp xếp theo độ phổ biến',
        'Sắp xếp theo đánh gía',
        'Sắp xếp theo mới nhất',
        'Sắp xếp theo giá: thấp đến cao',
        'Sắp xếp theo giá: cao đến thấp',
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-product')}>
                <div className={cx('title')}>
                    <h1>Sản phẩm</h1>
                </div>
                <div className={cx('control-content')}>
                    <div className={cx('box-sort')}>
                        <span className={cx('label-control')}>Sắp xếp theo:</span>
                        <WrapperHover noIcon content={listSort} classNameContent={cx('wrapper-list-sort')} className={cx('list-sort')}>
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
                <div className={cx('sidebar')}></div>
                <div className={cx('content')}></div>
            </div>
        </div>
    );
}

export default Product;
