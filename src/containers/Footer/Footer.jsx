import React from "react";
import { images } from '../../constants';
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="subscribe">
                <div className="sub-left">
                    <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                </div>
                <div className="sub-right">
                    <div className="input-text">
                        <i class="fa-regular fa-envelope"></i>
                        <input type="email" name="email" id="email" placeholder="Enter your email address" />
                    </div>
                    
                    <input type="submit" value="Subscibe to NewsLetter" />
                </div>
            </div>
            <div className="footer-top">
                <div className="footer-content">
                    <h1>SHOP.CO</h1>
                    <p>We have clothes that suits your style and 
                        which you’re proud to wear. From women to men.</p>
                    <div className="footer-socials">
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                </div>
                <div className="links-content">
                        <div className="links-items">
                            <h2>COMPANY</h2>
                            <a href="http://">About</a>
                            <a href="http://">Features</a>
                            <a href="http://">Works</a>
                            <a href="http://">Career</a>
                        </div>
                        <div className="links-items">
                            <h2>HELP</h2>
                            <a href="http://">Customer Support</a>
                            <a href="http://">Delivery Details</a>
                            <a href="http://">Terms & Conditions</a>
                            <a href="http://">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="links-content">
                        <div className="links-items">
                            <h2>FAQ</h2>
                            <a href="http://">Account</a>
                            <a href="http://">Manage Deliveries</a>
                            <a href="http://">Orders</a>
                            <a href="http://">Payments</a>
                        </div>
                        <div className="links-items">
                            <h2>RESOURCES</h2>
                            <a href="http://">Free eBooks</a>
                            <a href="http://">Development Tutorial</a>
                            <a href="http://">How to Blog</a>
                            <a href="http://">Youtube Playlist</a>
                        </div>
                    </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-left">
                    <p>Shop.co © 2000-{currentYear}, All Rights Reserved</p>
                </div>
                <div className="footer-right">
                    <img src={images.visa} alt="Visa" />
                    <img src={images.mastercard} alt="MasterCard" />
                    <img src={images.paypal} alt="PayPal" />
                    <img src={images.applepay} alt="Apple Pay" />
                    <img src={images.googlepay} alt="Google Pay" />
                </div>
            </div>
        </div>
    );
}

export default Footer;