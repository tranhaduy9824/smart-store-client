import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import {
    HomeIcon,
    MailIcon,
    PhoneIcon,
    ProtectIcon,
    ReloadIcon,
    RocketIcon,
    SupportIcon,
    TagIcon,
} from '~/components/Icons';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('footer-top')}>
                <div className={cx('footer-top-item')}>
                    <div className={cx('image-item')}>
                        <span>
                            <RocketIcon className={cx('sub-image')} />
                        </span>
                    </div>
                    <div className={cx('content-item')}>
                        <div className={cx('content-title')}>Free Shipping</div>
                        <div className={cx('content-des')}>For all orders over $200</div>
                    </div>
                </div>
                <div className={cx('footer-top-item')}>
                    <div className={cx('image-item')}>
                        <span>
                            <ReloadIcon className={cx('sub-image')} />
                        </span>
                    </div>
                    <div className={cx('content-item')}>
                        <div className={cx('content-title')}>1 & 1 Returns</div>
                        <div className={cx('content-des')}>Cancellation after 1 day</div>
                    </div>
                </div>
                <div className={cx('footer-top-item')}>
                    <div className={cx('image-item')}>
                        <span>
                            <ProtectIcon className={cx('sub-image')} />
                        </span>
                    </div>
                    <div className={cx('content-item')}>
                        <div className={cx('content-title')}>100% Secure Payment</div>
                        <div className={cx('content-des')}>Gurantee secure payments</div>
                    </div>
                </div>
                <div className={cx('footer-top-item')}>
                    <div className={cx('image-item')}>
                        <span>
                            <SupportIcon className={cx('sub-image')} />
                        </span>
                    </div>
                    <div className={cx('content-item')}>
                        <div className={cx('content-title')}>24/7 Dedicated Support</div>
                        <div className={cx('content-des')}>Anywhere & anytime</div>
                    </div>
                </div>
                <div className={cx('footer-top-item')}>
                    <div className={cx('image-item')}>
                        <span>
                            <TagIcon className={cx('sub-image')} />
                        </span>
                    </div>
                    <div className={cx('content-item')}>
                        <div className={cx('content-title')}>Daily Offers</div>
                        <div className={cx('content-des')}>Discount up to 70% OFF</div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-center')}>
                <div className={cx('footer-center-item')}>
                    <div className={cx('info-title')}>
                        <h2 className={cx('title')}>SmartStore – Your Online Every Product</h2>
                        <p className={cx('des')}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus viverra iaculis. Etiam
                            vulputate et justo eget scelerisque.
                        </p>
                    </div>
                    <div className={cx('info-contact')}>
                        <ul>
                            <li>
                                <span className={cx('icon')}>
                                    <PhoneIcon />
                                </span>
                                <span className={cx('text')}>
                                    Hotline 24/7:
                                    <h3>(+84) 867 125 575</h3>
                                </span>
                            </li>
                            <li>
                                <span className={cx('icon')}>
                                    <HomeIcon />
                                </span>
                                <span className={cx('text')}>Dai Minh, Dai Loc, Quang Nam</span>
                            </li>
                            <li>
                                <span className={cx('icon')}>
                                    <MailIcon />
                                </span>
                                <span className={cx('text')}>duyth.22it@vku.udn.vn</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('footer-center-item')}>
                    <div className={cx('footer-menu')}>
                        <h2>Useful Links</h2>
                        <ul>
                            <li>
                                <NavLink>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink>Help Center</NavLink>
                            </li>
                            <li>
                                <NavLink>Career</NavLink>
                            </li>
                            <li>
                                <NavLink>Policy</NavLink>
                            </li>
                            <li>
                                <NavLink>Flash Sale</NavLink>
                            </li>
                            <li>
                                <NavLink>Official</NavLink>
                            </li>
                            <li>
                                <NavLink>Sitemap</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('footer-menu')}>
                        <h2>Help Center</h2>
                        <ul>
                            <li>
                                <NavLink>Payments</NavLink>
                            </li>
                            <li>
                                <NavLink>Shipping</NavLink>
                            </li>
                            <li>
                                <NavLink>Product Returns</NavLink>
                            </li>
                            <li>
                                <NavLink>FAQ</NavLink>
                            </li>
                            <li>
                                <NavLink>Checkout</NavLink>
                            </li>
                            <li>
                                <NavLink>Other Issues</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('footer-menu')}>
                        <h2>SmartStore Busines</h2>
                        <ul>
                            <li>
                                <NavLink>Sell On SmartStore</NavLink>
                            </li>
                            <li>
                                <NavLink>Affiliate Program</NavLink>
                            </li>
                            <li>
                                <NavLink>Our Suppliers</NavLink>
                            </li>
                            <li>
                                <NavLink>Accessibility</NavLink>
                            </li>
                            <li>
                                <NavLink>Advertise With Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('footer-center-item')}>
                    <h2>SmartStore Newsletter</h2>
                    <p>Register now to get updates on promotions and coupns. Don’t worry! We not spam</p>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <div className={cx('copyright')}>©2024 <b>SmartStore</b> All rights reserved</div>
            </div>
        </footer>
    );
}

export default Footer;
