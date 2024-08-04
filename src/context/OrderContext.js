import { createContext, useCallback, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showAlert } from '~/redux/actions/alert';
import { getRequest, postRequest } from '~/utils/services';
import { AuthContext } from './AuthContext';
import { hideLoading, showLoading } from '~/redux/actions/loading';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const [searchParams] = useSearchParams();

    useEffect(() => {
        const handleVNPayReturn = async () => {
            try {
                const params = Object.fromEntries([...searchParams]);
                const response = await getRequest('/payment/vnpay_return', params);

                if (response.messageSuccess) {
                    navigate('/profile');
                    dispatch(showAlert('Thanh toán thành công!'));
                } else {
                    navigate('/profile');
                    dispatch(showAlert('Thanh toán không thành công!'));
                }
            } catch (error) {
                navigate('/profile');
                console.error('Lỗi xử lý phản hồi từ VNPay:', error);
                dispatch(showAlert('Đã xảy ra lỗi, vui lòng thử lại sau'));
            }
        };

        if (searchParams.size === 12) {
            handleVNPayReturn();
        }
    }, [searchParams, dispatch, user, navigate]);

    const createOrder = useCallback(
        async (data, token = user?.token) => {
            try {
                dispatch(showLoading());
                const response = await postRequest('/orders', data, token);
                dispatch(hideLoading());

                if (response.order.paymentMethod === 'cash_on_delivery') {
                    navigate('/profile');
                    dispatch(showAlert('Đặt hàng thành công!'));
                } else {
                    const payment = await postRequest(
                        '/payment',
                        {
                            amount: response.order.totalPrice,
                            orderId: response.order._id,
                        },
                        token,
                    );
                    window.location.href = payment.redirectUrl;
                }
            } catch (error) {
                console.log(error);
                dispatch(hideLoading());
                dispatch(showAlert('Đã xảy ra lỗi, vui lòng thử lại sau'));
            }
        },
        [dispatch, user, navigate],
    );

    return <OrderContext.Provider value={{ createOrder }}>{children}</OrderContext.Provider>;
};
