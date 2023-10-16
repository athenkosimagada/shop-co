import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import "./Cart.css";
import { Link } from "react-router-dom";
import { data } from "../../constants";
import { FaMinus, FaPlus } from "react-icons/fa";

function Cart() {
  const [count, setCount] = useState(1);
  const [subTotal, setSubTotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(15);
  const [discountPercetange, setDiscountPercetange] = useState(0);
  const [promoCode, setPromoCode] = useState("");

  // Load cart from local storage when the component mounts
  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem("cart");
    if (cartFromLocalStorage) {
      const parsedCart = JSON.parse(cartFromLocalStorage);
      data.cart = parsedCart;
      recalculateTotals();
    }
  }, []);

  function saveCartToLocalStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  useEffect(() => {
    recalculateTotals();
  }, []);

  function applyCode() {
    data.discounts.map((item) => {
      if (item.code === promoCode) {
        setDiscountPercetange(item.discount);
        if (item.delivery === true) {
          setDeliveryFee(0);
        }
      }
    });
    setPromoCode("");
  }

  function handleDelete(id) {
    const updatedCart = data.cart.filter((item) => item.id !== id);
    data.cart = updatedCart;
    recalculateTotals();
  }

  function incrementCount(id) {
    data.cart[id].quantity = data.cart[id].quantity + 1;
    recalculateTotals();
  }

  function decrementCount(id) {
    if (data.cart[id].quantity > 1) {
      data.cart[id].quantity = data.cart[id].quantity - 1;
      recalculateTotals();
    }
  }

  function recalculateTotals() {
    let temp = 0;
    data.cart.forEach((item) => {
      temp += item.price * item.quantity;
    });
    setSubTotal(temp);
    // Save the updated cart to local storage
    saveCartToLocalStorage(data.cart);
  }

  const items = data.cart.map((item, index) => (
    <div className="cart-item" key={index}>
      <div className="cart-img">
        <Link
          to={`/shop/${item.id}`}
          key={item.id}
          style={{ color: "#000", textDecoration: "none" }}
        >
          <img src={item.image} alt="Clothes" />
        </Link>
      </div>
      <div className="cart-details">
        <div className="cart-detail">
          <div className="cart-detail_left">
            <h3>{item.title}</h3>
            <p>
              Size: <span>{item.size}</span>
            </p>
            <p>
              Color: <span>{item.color}</span>
            </p>
          </div>
          <div
            className="cart-detail_right"
            key={index}
            onClick={() => handleDelete(item.id)}
          >
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
        <div className="cart-item_btm">
          <h1>${item.price}</h1>
          <div className="quantity-changer">
            <FaMinus
              className="btn-change"
              onClick={() => decrementCount(index)}
            />
            <p>{item.quantity}</p>
            <FaPlus
              className="btn-change"
              onClick={() => incrementCount(index)}
            />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <MainLayout>
      <div className="cart">
        <div className="navigation">
          <Link to="/">
            <p>Home</p> <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <p>Cart</p>
        </div>
        <div className="cart-content">
          <h1>YOUR CART</h1>
          <div className="cart-container">
            <div className="cart-left">
              {data.cart.length > 0 ? (
                items
              ) : (
                <p className="empty">No items on the cart</p>
              )}
            </div>
            <div className="cart-right">
              <h3>Order Summary</h3>
              <div className="amount">
                <div className="amount-type">
                  <p>Subtotal</p>
                  <h4>${subTotal}</h4>
                </div>
                <div className="amount-type">
                  <p>Discount(- {discountPercetange * 100}%)</p>
                  <h4 className="discount-price_cart">
                    -${subTotal * discountPercetange}
                  </h4>
                </div>
                <div className="amount-type">
                  <p>Delivery Fee</p>
                  <h4>${deliveryFee}</h4>
                </div>
              </div>
              <div className="total">
                <p>Total</p>
                <h3>
                  ${subTotal - subTotal * discountPercetange + deliveryFee}
                </h3>
              </div>
              <div className="dicount">
                <div className="cart-input">
                  <i className="fa-solid fa-tag"></i>
                  <input
                    type="text"
                    placeholder="Add promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                </div>
                <button className="checkout" type="button" onClick={applyCode}>
                  Apply
                </button>
              </div>
              <button className="checkout">
                Go to Checkout
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Cart;
