// Layouts 
import Home from '~/pages/Home'; 
import Product from '~/pages/Product';
import News from '~/pages/News'; 
import Cart from '~/pages/Cart'; 
import Profile from '~/pages/Profile'; 
import Login from '~/pages/Login'; 
import Signup from '~/pages/Signup'; 
import ResetPassword from '~/pages/ResetPassword';
import NullLayout from '~/layouts/NullLayout';
import ProductDetail from '~/pages/ProductDetail';
import Favourite from '~/pages/Favourite';

const publicRoutes = [ 
    { 
        path: '/', 
        component: Home, 
    },
    {
        path: '/product',
        component: Product
    },
    {
        path: '/product/:id',
        component: ProductDetail,
    },
    { 
        path: '/news', 
        component: News 
    }, 
    { 
        path: '/cart', 
        component: Cart, 
    }, 
    { 
        path: '/profile', 
        component: Profile, 
    },
    {
        path: '/favourite',
        component: Favourite,
    },
    { 
        path: '/login', 
        component: Login,
        layout: NullLayout
    }, 
    { 
        path: '/signup', 
        component: Signup,
        layout: NullLayout
    },
    {
        path: '/reset-password/:id/:token',
        component: ResetPassword,
        layout: NullLayout
    },
] 

const privateRoutes = [] 

export { publicRoutes, privateRoutes }
