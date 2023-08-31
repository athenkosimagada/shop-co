import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import './Navbar.css';

const Navbar = () => {
    const [pressed, setPressed] = useState(false);
    function handClick(){
        setPressed(!pressed);
    }
    return (
        <div className="navbar">
            <div className="nav-content">
                <div className="nav-left">
                    <div className="hamburger" onClick={handClick}>
                        {pressed
                        ? <i class="fa-solid fa-xmark"></i>
                        : <i class="fa-solid fa-bars"></i>}
                    </div>
                    <h2 className="logo">SHOP.CO</h2>
                    <div className={pressed ? "show" : "nav-links"}>
                        <a href="#">
                            Shop
                            <i class="fa-solid fa-chevron-down"></i>
                        </a>
                        <a href="#">On Sale</a>
                        <a href="#">New Arrivals</a>
                        <a href="#">Brands</a>
                    </div>
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