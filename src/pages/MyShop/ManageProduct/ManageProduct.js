import classNames from 'classnames/bind';
import styles from './ManageProduct.module.scss';
import { useContext, useState } from 'react';
import HeaderSelect from '~/components/HeaderSelect/HeaderSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from '~/context/ProductContext';
import { TrashIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import ModelManageProduct from './ModelManageProduct';

const cx = classNames.bind(styles);

function ManageProduct() {
    const [contentSelected, setContentSelected] = useState('all');
    const [showEditProduct, setShowEditProduct] = useState(false);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [productEdit, setProductEdit] = useState(null);

    const { newProducts } = useContext(ProductContext);

    const listHeader = [
        {
            content: 'all',
            title: 'Tất cả',
        },
        {
            content: 'is-active',
            title: 'Đang hoạt động',
        },
        {
            content: 'out-stock',
            title: 'Hết hàng',
        },
        {
            content: 'not approved',
            title: 'Chờ duyệt',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-title')}>
                <p className={cx('title')}>Quản lý sản phẩm</p>
                <div className={cx('add-product')} onClick={() => setShowAddProduct(true)}>
                    <FontAwesomeIcon icon={faPlus} /> Thêm sản phẩm
                </div>
            </div>
            <HeaderSelect
                listHeader={listHeader}
                contentSelected={contentSelected}
                setContentSelected={setContentSelected}
            />
            <div className={cx('search')}>
                <input placeholder="Nhập tên sản phẩm" type="text" />
                <span>0 Sản Phẩm</span>
            </div>
            <div className={cx('list-product')}>
                {newProducts?.map((product, index) => (
                    <div key={index} className={cx('product-item')}>
                        <Link to={`/product/${product?._id}`}>
                            <img src={product?.files?.photos[0]} alt="Ảnh" />
                        </Link>
                        <p to={`/product/${product?._id}`}>{product?.name}</p>
                        <div className={cx('controls')}>
                            <span
                                onClick={() => {
                                    setProductEdit(product);
                                    setShowEditProduct(true);
                                }}
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </span>
                            <span>
                                <TrashIcon />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <ModelManageProduct
                productEdit={productEdit}
                showEditProduct={showEditProduct}
                setShowEditProduct={setShowEditProduct}
            />
            <ModelManageProduct showEditProduct={showAddProduct} setShowEditProduct={setShowAddProduct} />
        </div>
    );
}

export default ManageProduct;
