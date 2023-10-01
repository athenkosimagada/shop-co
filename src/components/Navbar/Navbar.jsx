import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [pressed, setPressed] = useState(false);
    const [showShopLinks, setShowShopLinks] = useState(false);

    function handClick() {
        setPressed(!pressed);
        if(!pressed) {
            setShowShopLinks(!setShowShopLinks);
        }
    }

    function toggleShopLinks() {
        setShowShopLinks(!showShopLinks);
    }
    return (
        <div className="navbar">
            <div className="nav-content">
                <div className="nav-left">
                    <div className="hamburger" onClick={handClick}>
                        {pressed
                        ? <i className="fa-solid fa-xmark"></i>
                        : <i className="fa-solid fa-bars"></i>}
                    </div>
                    <Link to="/">
                        <h2 className="logo">SHOP.CO</h2>
                    </Link>
                    <div id="nav" className={pressed ? "show" : "nav-links"}>
                        <Link onClick={toggleShopLinks}>
                            Shop
                            {showShopLinks
                                ? <i className="fa-solid fa-chevron-up"></i>
                                : <i className="fa-solid fa-chevron-down"></i>}
                        </Link>
                        {showShopLinks && (
                            <div className="sub-menu">
                                <Link to="/shop">All</Link>
                                <Link to="/Men">Men</Link>
                                <Link to="/Women">Women</Link>
                            </div>
                        )}
                        <Link to="/sale">On Sale</Link>
                        <Link to="/arrivals">New Arrivals</Link>
                        <Link to="/brands">Brands</Link>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="seach-bar">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" name="product" id="search" placeholder="Search for products..."/>
                    </div>
                    <div className="icons">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-solid fa-user"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;