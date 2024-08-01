/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showAlert } from '~/redux/actions/alert';
import { hideLoading, showLoading } from '~/redux/actions/loading';
import { getRequest } from '~/utils/services';
import { AuthContext } from './AuthContext';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [saleProducts, setSaleProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [recommendProducts, setRecommendProducts] = useState([]);
    const [recentProducts, setRecentProducts] = useState([]);
    const [notFound, setNotFound] = useState(false);

    const { user } = useContext(AuthContext);

    const getProduct = useCallback(
        async (id) => {
            try {
                dispatch(showLoading());
                const response = await getRequest(`/products/${id}`);
                dispatch(hideLoading());
                setProduct(response.data);
            } catch (error) {
                console.log(error);
                dispatch(hideLoading());
                dispatch(showAlert('Đã xảy ra lỗi, vui lòng thử lại sau'));
            }
        },
        [dispatch],
    );

    const getProducts = useCallback(
        async (data) => {
            try {
                dispatch(showLoading());
                const response = await getRequest('/products/', data);
                dispatch(hideLoading());
                setProducts(response.data.products);
            } catch (error) {
                console.log(error);
                dispatch(hideLoading());
                dispatch(showAlert('Đã xảy ra lỗi, vui lòng thử lại sau'));
            }
        },
        [dispatch],
    );

    const searchProduct = useCallback(
        async (data, setShowLoading) => {
            try {
                setShowLoading(true);
                const response = await getRequest('/products/search', data);
                setShowLoading(false);
                if (response.products.length === 0) {
                    setSearchResult([]);
                    setNotFound(true);
                } else {
                    setSearchResult(response.products);
                    setNotFound(false);
                }
            } catch (error) {
                console.log(error);
                dispatch(hideLoading());
                dispatch(showAlert('Đã xảy ra lỗi, vui lòng thử lại sau'));
            }
        },
        [dispatch],
    );

    const getNewProducts = useCallback(async () => {
        try {
            dispatch(showLoading());
            const response = await getRequest('/products/new');
            dispatch(hideLoading());
            setNewProducts(response.products);
        } catch (error) {
            console.log(error);
            dispatch(hideLoading());
            dispatch(showAlert('Đã xảy ra lỗi, vui lòng thử lại sau'));
        }
    }, [dispatch]);

    const getSaleProducts = useCallback(async () => {
        try {
            dispatch(showLoading());
            const response = await getRequest('/products/sale');
            dispatch(hideLoading());
            setSaleProducts(response.products);
        } catch (error) {
            console.log(error);
            dispatch(hideLoading());
            dispatch(showAlert('Đã xảy ra lỗi, vui lòng thử lại sau'));
        }
    }, [dispatch]);

    const getRecommendProducts = useCallback(async () => {
        try {
            dispatch(showLoading());
            const response = await getRequest('/products/recommend', {}, user ? user.token : null);
            dispatch(hideLoading());
            setRecommendProducts(response.products);
        } catch (error) {
            console.log(error);
            dispatch(hideLoading());
            dispatch(showAlert('Đã xảy ra lỗi, vui lòng thử lại sau'));
        }
    }, [dispatch, user]);

    const getProductsByShop = useCallback(async (id) => {
        try {
            const response = await getRequest(`/products/shop/${id}`);
            return response.products;
        } catch (error) {
            console.log(error);
        }
    }, []);

    const addProductToRecent = useCallback(
        (product) => {
            const recentProducts = JSON.parse(localStorage.getItem('recentProducts')) || [];

            const index = recentProducts.findIndex((p) => p.id === product._id);

            if (index > -1) {
                recentProducts.splice(index, 1);
            }

            recentProducts.unshift({
                id: product._id,
                imageUrl: product.files.photos[0],
            });

            if (recentProducts.length > 10) {
                recentProducts.pop();
            }

            localStorage.setItem('recentProducts', JSON.stringify(recentProducts));
            setRecentProducts(recentProducts);
        },
        [setRecentProducts],
    );

    const getRecentProducts = useCallback(() => {
        const storedRecentProducts = JSON.parse(localStorage.getItem('recentProducts')) || [];
        if (JSON.stringify(storedRecentProducts) !== JSON.stringify(recentProducts)) {
            setRecentProducts(storedRecentProducts);
        }
    }, [recentProducts]);

    useEffect(() => {
        getNewProducts();
        getSaleProducts();
        getRecommendProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                searchResult,
                setSearchResult,
                searchProduct,
                notFound,
                setNotFound,
                product,
                setProduct,
                getProduct,
                products,
                setProducts,
                getProducts,
                newProducts,
                getNewProducts,
                saleProducts,
                getSaleProducts,
                recommendProducts,
                getRecommendProducts,
                getProductsByShop,
                recentProducts,
                addProductToRecent,
                getRecentProducts,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
