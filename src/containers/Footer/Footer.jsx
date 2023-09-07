import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
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
        </div>
    );
}

export default Footer;