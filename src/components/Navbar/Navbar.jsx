import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { data } from "../../constants";

const Navbar = () => {
  const [pressed, setPressed] = useState(false);
  const [showShopLinks, setShowShopLinks] = useState(false);
  const [reload, setReload] = useState(false);
  const [cartLength, setCartLength] = useState(data.cart.length);

  function handClick() {
    setPressed(!pressed);
    if (!pressed) {
      setShowShopLinks(!setShowShopLinks);
    }
  }

  function toggleShopLinks() {
    setShowShopLinks(!showShopLinks);
  }

  useEffect(() => {
    if (reload) {
      setTimeout(() => {
        window.location.reload();
      }, 100);
      setReload(false);
    }
  }, [reload]);
  const effect = useEffect(() => {
    setCartLength(data.cart.length);
  }, [data.cart.length]);

  function handleLinkClick() {
    setReload(true);
  }

  return (
    <div className="navbar">
      <div className="nav-content">
        <div className="nav-left">
          <div className="hamburger" onClick={handClick}>
            {pressed ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
          <Link to="/">
            <h2 className="logo">SHOP.CO</h2>
          </Link>
          <div id="nav" className={pressed ? "show" : "nav-links"}>
            <Link onClick={toggleShopLinks}>
              Shop
              {showShopLinks ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </Link>
            {showShopLinks && (
              <div className="sub-menu">
                <Link to="/shop" onClick={handleLinkClick}>
                  All
                </Link>
                <Link to="/shop/men" onClick={handleLinkClick}>
                  Men
                </Link>
                <Link to="/shop/women" onClick={handleLinkClick}>
                  Women
                </Link>
              </div>
            )}
            <Link to="/sale" onClick={handleLinkClick}>
              On Sale
            </Link>
            <Link to="/arrivals" onClick={handleLinkClick}>
              New Arrivals
            </Link>
          </div>
        </div>
        <div className="nav-right">
          <div className="seach-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              name="product"
              id="search"
              placeholder="Search for products..."
            />
          </div>
          <div className="icons">
            <Link to="/cart" onClick={handleLinkClick}>
              <i
                className="fa-solid fa-cart-shopping"
                id={cartLength  > 0 ? "cart" : undefined}
              ></i>
            </Link>

            <Link to="/user" onClick={handleLinkClick}>
              <i className="fa-solid fa-user"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
