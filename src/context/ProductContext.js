import { createContext, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showAlert } from '~/redux/actions/alert';
import { getRequest } from '~/utils/services';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [searchResult, setSearchResult] = useState([]);
    const [saleProducts, setSaleProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [notFound, setNotFound] = useState(false);

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
                dispatch(showAlert('Đã xảy ra lỗi, vui lòng thử lại sau'));
            }
        },
        [dispatch],
    );

    const getNewProducts = useCallback(async () => {
        try {
            const response = await getRequest('/products/new');
            console.log(response.products);
            setNewProducts(response.products);
        } catch (error) {
            console.log(error);
            dispatch(showAlert('Đã xảy ra lỗi, vui lòng thử lại sau'));
        }
    });

    const getSaleProducts = useCallback(async () => {
        try {
            const response = await getRequest('/products/sale');
            console.log(response.products);
            setSaleProducts(response.products);
        } catch (error) {
            console.log(error);
            dispatch(showAlert('Đã xảy ra lỗi, vui lòng thử lại sau'));
        }
    });

    useEffect(() => {
        getNewProducts();
        getSaleProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{ searchResult, setSearchResult, searchProduct, notFound, setNotFound, newProducts, saleProducts }}
        >
            {children}
        </ProductContext.Provider>
    );
};
