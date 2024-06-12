import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarDone, faStarHalfAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarYet } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { LoadingIcon, SearchIcon } from '../Icons';
import useDebounce from '~/hooks/useDebounce';
import images from '~/assets/images';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Search() {
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('0');
    const [inputing, setInputing] = useState(true);
    const [results, setResults] = useState([]);
    const [showLoading, setShowLoading] = useState(false);
    const inputRef = useRef(null);

    const debouceValue = useDebounce(inputValue, 500);

    const handleInputing = () => {
        setInputing(true);
        inputRef.current.focus();
    };

    const searchResult = [
        {
            image: images.test,
            name: 'Farmat Farmhouse Soft White',
            rating: 4,
            price: 40.0,
            sale: 10,
        },
        {
            image: images.test,
            name: 'Miko The Panda Water Bottle',
            rating: 3.5,
            price: 10.0,
        },
        {
            image: images.test,
            name: 'Wayfair Basics Dinner Plate Storage',
            rating: 3,
            price: 32.55,
            sale: 50,
        },
        {
            image: images.test,
            name: 'Wayfair Basics Dinner Plate Storage',
            rating: 3,
            price: 32.55,
            sale: 50,
        },
    ];

    const handleSearch = () => {
        setShowLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${debouceValue}&type=less`)
            .then((res) => res.json())
            .then((data) => {
                setResults(searchResult);
                setShowLoading(false);
            })
            .catch(() => {
                setShowLoading(false);
            });
    };

    useEffect(() => {
        if (debouceValue.trim('')) {
            setShowLoading(true);
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${debouceValue}&type=less`)
                .then((res) => res.json())
                .then((data) => {
                    setResults(searchResult);
                    setShowLoading(false);
                })
                .catch(() => {
                    setShowLoading(false);
                });
        }
    }, [debouceValue]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-search')}>
                <select className={cx('select-category')} value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
                    <option value="0">
                        All Categories
                    </option>
                    <option value="1" >
                        All Categories
                    </option>
                    <option value="2" >
                        All Categories
                    </option>
                    <option value="3" >
                        All Categories
                    </option>
                    <option value="4" >
                        All Categories
                    </option>
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
                        placeholder="I'm searching for..."
                    />
                    {inputValue && inputing && !showLoading && (
                        <span
                            onClick={() => {
                                setInputValue('');
                                setResults([]);
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
            {results.length > 0 && inputValue.length > 0 && (
                <div className={cx('search-result')}>
                    {results.map((result, index) => (
                        <div key={index} className={cx('item-result')}>
                            <div className={cx('image')}>
                                <NavLink to="/product/:id">
                                    <img src={result.image} alt="Image" />
                                </NavLink>
                            </div>
                            <div className={cx('content-item')}>
                                <NavLink to="/product/:id" className={cx('title-item')}>
                                    {result.name}
                                </NavLink>
                                <div className={cx('rating-item')}>
                                    <span className={cx('star-icon')}>
                                        <FontAwesomeIcon icon={faStarDone} />
                                    </span>
                                    <span className={cx('star-icon')}>
                                        <FontAwesomeIcon icon={faStarDone} />
                                    </span>
                                    <span className={cx('star-icon')}>
                                        <FontAwesomeIcon icon={faStarHalfAlt} />
                                    </span>
                                    <span className={cx('star-icon')}>
                                        <FontAwesomeIcon icon={faStarYet} />
                                    </span>
                                    <span className={cx('star-icon')}>
                                        <FontAwesomeIcon icon={faStarYet} />
                                    </span>
                                </div>
                                <div className={cx('price-item')}>
                                    {result.sale ? (
                                        <>
                                            <span className={cx('sale-price')}>
                                                ${(result.price * (100 - result.sale)) / 100}
                                            </span>
                                            <del>
                                                <i>
                                                    <span className={cx('price-old')}>${result.price}</span>
                                                </i>
                                            </del>
                                        </>
                                    ) : (
                                        <span className={cx('price')}>${result.price}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
