import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

import { LoginPage } from './pages/login/login';
import { RegisterPage } from './pages/register/register';

import { ProfilePage } from './pages/profile/profile';
import { ProfileInfo } from './pages/profile/profile-info/profile-info';
import { ProfileOrders } from './pages/profile/profile-orders/profile-orders';
import { ProfileWishlist } from './pages/profile/profile-wishlist/profile-wishlist';
import { ProfileAddresses } from './pages/profile/profile-addresses/profile-addresses';
import { ProfilePayment } from './pages/profile/profile-payment/profile-payment';
import { ProfileSettings } from './pages/profile/profile-settings/profile-settings';

import { ProductsPage } from './pages/products/products';
import { ProductDetailPage } from './pages/product-details/product-details';

import { CartPage } from './pages/cart/cart';
import { CheckoutPage } from './pages/checkout/checkout';
import { Contact } from 'lucide-angular';
import { ContactPage } from './pages/contact/contact';

export const routes: Routes = [
    { path: 'login', component: LoginPage , data: { animation: 'LoginPage' } },
    { path: 'register', component: RegisterPage , data: { animation: 'RegisterPage' } },
    { path: 'products', component: ProductsPage, data: { animation: 'ProductsPage' } },
    { path: 'product/:id', component: ProductDetailPage , data: { animation: 'ContactPage' } },
    { path: 'cart', component: CartPage, data: { animation: 'CartPage' } },
    { path: 'checkout', component: CheckoutPage, data: { animation: 'CheckoutPage' } },
    { path: 'contact', component: ContactPage, data: { animation: 'ContactPage' } },
    { path: '', component: Home },

    {
        path: 'profile',
        component: ProfilePage,
        children: [
            { path: '', redirectTo: 'info', pathMatch: 'full' },
            { path: 'info', component: ProfileInfo },
            { path: 'orders', component: ProfileOrders },
            { path: 'wishlist', component: ProfileWishlist },
            { path: 'addresses', component: ProfileAddresses },
            { path: 'payment', component: ProfilePayment },
            { path: 'settings', component: ProfileSettings },
        ]
    }
];
