import { AuthContextProvider } from './AuthContext';
import { CategoryContextProvider } from './CategoryContext';
import { ProductContextProvider } from './ProductContext';
import { ReviewContextProvider } from './ReviewContext';

function ContextProvider({ children }) {
    return (
        <AuthContextProvider>
            <CategoryContextProvider>
                <ProductContextProvider>
                    <ReviewContextProvider>{children}</ReviewContextProvider>
                </ProductContextProvider>
            </CategoryContextProvider>
        </AuthContextProvider>
    );
}

export default ContextProvider;
