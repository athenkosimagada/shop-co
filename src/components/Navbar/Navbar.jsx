import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../../constants";
import NewItem from "../NewItem/NewItem";

const Navbar = () => {
  const [pressed, setPressed] = useState(false);
  const [showShopLinks, setShowShopLinks] = useState(false);
  const [reload, setReload] = useState(false);
  const [cartLength, setCartLength] = useState(data.cart.length);
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  function handleChange(value) {
    setText(value)
    const filteredItems = data.clothes.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setList(filteredItems);
    setShowPopup(value !== "" && value !== null);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter" && list.length > 0) {
      // Pass 'list' to the search results page
      navigate({
        pathname: "/search_results",
        search: `?searchTerm=${encodeURIComponent(text)}`, // Encode the search term
      });
      setShowPopup(false);
    }
  }

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
      {showPopup && (
        <div className="popup">
          <h2>Search results</h2>
          <div className="results_items">
            {list.map((item) => (
              <Link
                onClick={() => {
                  setShowPopup(false);
                  setTimeout(() => {
                    window.location.reload();
                  }, 100);
                }}
                to={`/shop/${item.id}`}
                key={item.id}
              >
                <NewItem
                  imgUrl={item.imgUrls[0].pic}
                  title={item.title}
                  price={item.price}
                  rate={item.rate}
                  discount={item.discount}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
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
              onKeyPress={handleKeyPress}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Search for products..."
            />
          </div>
          <div className="icons">
            <Link to="/cart" onClick={handleLinkClick}>
              <i
                className="fa-solid fa-cart-shopping"
                id={cartLength > 0 ? "cart" : undefined}
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
