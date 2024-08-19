import classNames from 'classnames/bind';
import styles from './ModelManageProduct.module.scss';
import { useContext, useEffect, useState } from 'react';
import WrapperModel from '~/components/WrapperModel';
import { CategoryContext } from '~/context/CategoryContext';

const cx = classNames.bind(styles);

function ModelManageProduct({ productEdit, showEditProduct, setShowEditProduct }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [sale, setSale] = useState(0);
    const [photos, setPhotos] = useState([]);
    const [video, setVideo] = useState(null);
    const [category, setCategory] = useState('');
    const [categorySub, setCategorySub] = useState('');
    const [shippingCost, setShippingCost] = useState(0);
    const [inStock, setInStock] = useState(true);

    const { categories } = useContext(CategoryContext);

    useEffect(() => {
        setName(productEdit?.name || '');
        setDescription(productEdit?.des || '');
        setPrice(productEdit?.price || 0);
        setSale(productEdit?.sale || 0);
        setPhotos(productEdit?.files?.photos || []);
        setVideo(productEdit?.files?.video || null);
        setCategory(productEdit?.category || '');
        setCategorySub(productEdit?.categorySub || '');
        setShippingCost(productEdit?.shippingCost || 0);
        setInStock(productEdit?.inStock || true);
    }, [productEdit]);

    const handlePhotoChange = (e) => {
        const files = Array.from(e.target.files);
        const validPhotos = files.filter((file) => file.type.startsWith('image/'));
        setPhotos(validPhotos);
    };

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'video/mp4') {
            setVideo(file);
        } else {
            setVideo(null);
        }
    };

    return (
        <WrapperModel
            show={showEditProduct}
            onClose={() => setShowEditProduct(false)}
            classNameContent={cx('model-edit-product')}
        >
            <h2>Edit Product</h2>
            <div className={cx('info')}>
                <div className={cx('item-info')}>
                    <label htmlFor="name">Tên</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={cx('item-info')}>
                    <label htmlFor="description">Mô tả</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className={cx('item-info')}>
                    <label htmlFor="price">Giá</label>
                    <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className={cx('item-info')}>
                    <label htmlFor="sale">Giảm giá</label>
                    <input type="number" id="sale" value={sale} onChange={(e) => setSale(e.target.value)} />
                </div>
                <div className={cx('item-info')}>
                    <label htmlFor="photos">Ảnh</label>
                    <div className={cx('photo-preview')}>
                        {photos.map((photo, index) => (
                            <div key={index} className={cx('photo-item')}>
                                <img src={photo} alt={`Ảnh ${index}`} />
                                <button
                                    className={cx('remove-btn')}
                                    onClick={() => {
                                        const newPhotos = [...photos];
                                        newPhotos.splice(index, 1);
                                        setPhotos(newPhotos);
                                    }}
                                >
                                    x
                                </button>
                            </div>
                        ))}
                    </div>
                    <input type="file" id="photos" multiple accept="image/*" onChange={handlePhotoChange} />
                </div>
                <div className={cx('item-info')}>
                    <label htmlFor="video">Video</label>
                    <div className={cx('video-preview')}>
                        {video && (
                            <div className={cx('video-item')}>
                                <video src={video} controls />
                                <button className={cx('remove-btn')} onClick={() => setVideo(null)}>
                                    x
                                </button>
                            </div>
                        )}
                        <input type="file" id="video" accept="video/mp4" onChange={handleVideoChange} />
                    </div>
                </div>
                <div className={cx('item-info')}>
                    <label htmlFor="category">Danh mục</label>
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Chọn danh mục</option>
                        {categories.map((cat) => (
                            <option key={cat._id} value={cat.name}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={cx('item-info')}>
                    <label htmlFor="categorySub">Danh mục phụ</label>
                    <select id="categorySub" value={categorySub} onChange={(e) => setCategorySub(e.target.value)}>
                        <option value="">Chọn danh mục phụ</option>
                        {categories
                            .find((cat) => cat.name === category)
                            ?.categorySub.map((subCat) => (
                                <option key={subCat} value={subCat}>
                                    {subCat}
                                </option>
                            ))}
                    </select>
                </div>
                <div className={cx('item-info')}>
                    <label htmlFor="shippingCost">Chi phí vận chuyển</label>
                    <input
                        type="number"
                        id="shippingCost"
                        value={shippingCost}
                        onChange={(e) => setShippingCost(e.target.value)}
                    />
                </div>
                <div className={cx('item-info')}>
                    <label htmlFor="inStock">Trong kho</label>
                    <input
                        type="checkbox"
                        id="inStock"
                        checked={inStock}
                        onChange={(e) => setInStock(e.target.checked)}
                    />
                </div>
            </div>
            {productEdit ? (
                <div className={cx('save-btn')}>Lưu</div>
            ) : (
                <div className={cx('save-btn')}>Thêm sản phẩm</div>
            )}
        </WrapperModel>
    );
}

export default ModelManageProduct;
