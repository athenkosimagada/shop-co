import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-content">
                <div className="nav-left">
                    <h2 className="logo">SHOP.CO</h2>
                    <ul className="nav-links">
                        <li>
                            Shop
                            <i class="fa-solid fa-chevron-down"></i>
                        </li>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                    </ul>
                </div>
                <div className="nav-right">
                    <div className="seach-bar">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" name="product" id="search" placeholder="Search for products..."/>
                    </div>
                    <div className="icons">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-user"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;