import { AuthContextProvider } from './AuthContext';
import { CartContextProvider } from './CartContext';
import { CategoryContextProvider } from './CategoryContext';
import { ProductContextProvider } from './ProductContext';
import { ReviewContextProvider } from './ReviewContext';
import { WishlistContextProvider } from './WishlistContext';

function ContextProvider({ children }) {
    return (
        <AuthContextProvider>
            <CategoryContextProvider>
                <ProductContextProvider>
                    <ReviewContextProvider>
                        <CartContextProvider>
                            <WishlistContextProvider>{children}</WishlistContextProvider>
                        </CartContextProvider>
                    </ReviewContextProvider>
                </ProductContextProvider>
            </CategoryContextProvider>
        </AuthContextProvider>
    );
}

export default ContextProvider;
