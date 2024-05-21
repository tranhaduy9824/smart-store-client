// Layouts 
import Home from '~/pages/Home'; 
import Product from '~/pages/Product';
import News from '~/pages/News'; 
import Cart from '~/pages/Cart'; 
import Profile from '~/pages/Profile'; 
import Login from '~/pages/Login'; 

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
        layout: null
    }, 
] 

const privateRoutes = [] 

export { publicRoutes, privateRoutes }
