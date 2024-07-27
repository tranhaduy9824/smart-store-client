import { AuthContextProvider } from './AuthContext';
import { CategoryContextProvider } from './CategoryContext';
import { ProductContextProvider } from './ProductContext';

function ContextProvider({ children }) {
    return (
        <AuthContextProvider>
            <CategoryContextProvider>
                <ProductContextProvider>{children}</ProductContextProvider>
            </CategoryContextProvider>
        </AuthContextProvider>
    );
}

export default ContextProvider;
