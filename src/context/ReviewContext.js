import { createContext, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showAlert } from '~/redux/actions/alert';
import { getRequest } from '~/utils/services';

export const ReviewContext = createContext();

export const ReviewContextProvider = ({ children }) => {
    const dispatch = useDispatch();

    const getReviewsByProductId = useCallback(async (productId) => {
        try {
            const response = await getRequest(`/review/${productId}`);
            return response.reviews;
        } catch (error) {
            console.log(error);
        }
    }, []);

    return <ReviewContext.Provider value={{ getReviewsByProductId }}>{children}</ReviewContext.Provider>;
};
