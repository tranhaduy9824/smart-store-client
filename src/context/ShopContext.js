import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '~/redux/actions/loading';
import { getRequest } from '~/utils/services';
import { showAlert } from '~/redux/actions/alert';

const { createContext } = require('react');

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [shop, setShop] = useState(null);

    const getShop = useCallback(
        async (id) => {
            try {
                dispatch(showLoading());
                const response = await getRequest(`/shop/${id}`);
                dispatch(hideLoading());
                setShop(response.shop);
            } catch (error) {
                console.log(error);
                dispatch(hideLoading());
                dispatch(showAlert('Đã xảy ra lỗi, vui lòng thử lại sau'));
            }
        },
        [dispatch],
    );

    return <ShopContext.Provider value={{ shop, setShop, getShop }}>{children}</ShopContext.Provider>;
};
