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
    }
] 

const privateRoutes = [] 

export { publicRoutes, privateRoutes }
