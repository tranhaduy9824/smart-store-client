import React, { useContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { LoadingIcon, SearchIcon } from '../Icons';
import useDebounce from '~/hooks/useDebounce';
import { NavLink } from 'react-router-dom';
import RatingStar from '../RatingStar';
import { formatPrice } from '~/handle/formatPrice';
import { CategoryContext } from '~/context/CategoryContext';
import { ProductContext } from '~/context/ProductContext';

const cx = classNames.bind(styles);

function Search() {
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('0');
    const [inputing, setInputing] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const inputRef = useRef(null);

    const debouceValue = useDebounce(inputValue, 500);

    const { categories } = useContext(CategoryContext);
    const { searchResult, setSearchResult, searchProduct, notFound, setNotFound } = useContext(ProductContext);

    const handleInputing = () => {
        setInputing(true);
        inputRef.current.focus();
    };

    const handleSearch = () => {
        const searchParams = { name: debouceValue.trim() };

        if (selectedValue !== '0') {
            const selectedCategory = categories.find(
                (category) => category.name === selectedValue || category.categorySub.includes(selectedValue),
            );
            if (selectedCategory) {
                if (selectedCategory.name === selectedValue) {
                    searchParams.category = selectedValue;
                } else {
                    searchParams.categorySub = selectedValue;
                }
            }
        }

        searchProduct(searchParams, setShowLoading);
    };

    useEffect(() => {
        if (debouceValue.trim() !== '') {
            handleSearch();
        } else {
            setSearchResult([]);
            setNotFound(false);
        }
    }, [debouceValue, selectedValue]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-search')}>
                <select
                    className={cx('select-category')}
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                >
                    <option value="0">Tất cả danh mục</option>
                    {categories &&
                        categories.map((category, index) => (
                            <React.Fragment key={index}>
                                <option>{category.name}</option>
                                {category.categorySub.map((item, index2) => (
                                    <option value={item} key={index2}>
                                        &nbsp;&nbsp;&nbsp;{item}
                                    </option>
                                ))}
                            </React.Fragment>
                        ))}
                </select>
                <div className={cx('space-dash')}>
                    <div className={cx('dash')}></div>
                </div>
                <div className={cx('search')}>
                    <input
                        value={inputValue}
                        ref={inputRef}
                        onChange={(e) => setInputValue(e.target.value)}
                        onFocus={handleInputing}
                        placeholder="Tôi đang tìm kiếm..."
                    />
                    {inputValue && inputing && !showLoading && (
                        <span
                            onClick={() => {
                                setInputValue('');
                                setSearchResult([]);
                            }}
                            className={cx('icon-delete')}
                        >
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </span>
                    )}
                    {inputing && showLoading && (
                        <span className={cx('icon-loading')}>
                            <LoadingIcon />
                        </span>
                    )}
                </div>
                <div className={cx('btn-search')} onClick={handleSearch}>
                    <SearchIcon />
                </div>
            </div>
            {inputValue.trim() !== '' && !notFound && searchResult.length > 0 && (
                <div className={cx('search-result')}>
                    {searchResult.map((result, index) => (
                        <div key={index} className={cx('item-result')}>
                            <div className={cx('image')}>
                                <NavLink to={`/product/${result._id}`}>
                                    <img src={result.files.photos[0]} alt="Image" />
                                </NavLink>
                            </div>
                            <div className={cx('content-item')}>
                                <NavLink to={`/product/${result._id}`} className={cx('title-item')}>
                                    {result.name}
                                </NavLink>
                                <div className={cx('rating-item')}>
                                    <RatingStar rating={result.rating} />
                                </div>
                                <div className={cx('price-item')}>
                                    {result.sale ? (
                                        <>
                                            <span className={cx('sale-price')}>
                                                {formatPrice((result.price * (100 - result.sale)) / 100)}
                                            </span>
                                            <del>
                                                <i>
                                                    <span className={cx('price-old')}>{formatPrice(result.price)}</span>
                                                </i>
                                            </del>
                                        </>
                                    ) : (
                                        <span className={cx('price')}>{formatPrice(result.price)}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {inputValue.trim() !== '' && notFound && (
                <div className={cx('search-result')}>
                    <p className={cx('not-found-product')}>Không tìm thấy sản phẩm</p>
                </div>
            )}
        </div>
    );
}

export default Search;
