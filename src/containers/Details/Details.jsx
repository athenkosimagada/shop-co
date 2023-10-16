import React, { useEffect, useState } from "react";
import "./Details.css";

import { FaStar, FaCheck, FaPlus, FaMinus } from "react-icons/fa";
import { data } from "../../constants";

function Details({ details, current }) {
  const [image, setImage] = useState(current);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [count, setCount] = useState(1);

  // Load cart from local storage when the component mounts
  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem("cart");
    if (cartFromLocalStorage) {
      const parsedCart = JSON.parse(cartFromLocalStorage);
      data.cart = parsedCart;
    }
  }, []);

  const [isAddingToCart, setIsAddingToCart] = useState(false); // To manage the adding state
  const [buttonText, setButtonText] = useState("Add to Cart"); // To manage the button text

  function handleAddToCart() {
    // Disable the "Add to Cart" button
    setIsAddingToCart(true);
    setButtonText("Adding...");

    // Retrieve the selected color and size based on the user's selections
    const selectedColor = details.colors[selectedColorIndex].name;
    const selectedSize = details.sizes[selectedSizeIndex].size;

    // Check if an item with the same title, size, and color already exists in the cart
    const existingCartItemIndex = data.cart.findIndex((item) => {
      return (
        item.title === details.title &&
        item.size === selectedSize &&
        item.color === selectedColor
      );
    });

    if (existingCartItemIndex !== -1) {
      // If the item exists, update the quantity
      data.cart[existingCartItemIndex].quantity += count;
    } else {
      // Create a new cart item object
      const cartItem = {
        id: data.cart.length, // Generate a unique ID for the cart item
        title: details.title,
        image: details.imgUrls[0].pic,
        size: selectedSize,
        color: selectedColor,
        price:
          details.discount > 0
            ? details.price - details.price * details.discount
            : details.price,
        quantity: count,
      };

      // Push the new cart item to the data.cart array
      data.cart.push(cartItem);
    }

    const cartToSave = JSON.stringify(data.cart);
    localStorage.setItem("cart", cartToSave);
    // Reset state
    setCount(1);
    setSelectedColorIndex(0);
    setSelectedSizeIndex(0);

    // Simulate the adding process for 2 seconds
    setTimeout(() => {
      setIsAddingToCart(false);
      setButtonText("Add to Cart");
      setShowPopup(true);

      // Automatically close the popup after a few seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3500); // Adjust the time as needed (3 seconds in this example)
    }, 2000); // Simulating 2 seconds of adding
  }


  function handleImageClick(newImage, index) {
    setImage(newImage);
    setSelectedImageIndex(index);
  }
  function setSelectedColor(index) {
    setSelectedColorIndex(index);
  }

  function setSelectedSize(index) {
    setSelectedSizeIndex(index);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  // Rating code
  const fullStars = Math.floor(details.rate);
  const decimalPart = details.rate - fullStars;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} size={20} style={{ color: "gold" }} />);
    } else if (i === fullStars && decimalPart > 0) {
      stars.push(
        <FaStar
          key="half"
          size={20}
          style={{
            color: "gold",
            clipPath: `polygon(0% 0%, ${decimalPart * 100}% 0%, ${
              decimalPart * 100
            }% 100%, 0% 100%)`,
          }}
        />
      );
    } else {
      stars.push(<FaStar key={i} size={20} style={{ color: "white" }} />);
    }
  }


  // Step 1: Define state variables for managing the popup
  const [showPopup, setShowPopup] = useState(false);

  // Step 2: Create a popup component
  function CartPopup() {
    return (
      <div className="cart-popup">
        <img src={details.imgUrls[0].pic} alt="Image"/>
        <p>Item added to the cart</p>
        <i onClick={() => setShowPopup(false)} class="fa-solid fa-xmark"></i>
      </div>
    );
  }

  return (
    <div className="details">
      {showPopup && <CartPopup />}
      <div className="images">
        <div className="img-3">
          {details.imgUrls.map((img, index) => (
            <div>
              <img
                key={index}
                onClick={() => handleImageClick(img.pic, index)}
                src={img.pic}
                alt={`Image ${index}`}
                className={index === selectedImageIndex ? "selected" : ""}
              />
            </div>
          ))}
        </div>
        <div className="img-1">
          <img src={image} alt="Selected Image" />
        </div>
      </div>
      <div className="product-detail">
        <h1>{details.title}</h1>
        <div className="rate">
          <div className="star-rating">{stars}</div>
          <p>{details.rate.toFixed(1)}/5</p>
        </div>

        <div className="price">
          {details.discount > 0 ? (
            <>
              <h3>
                ${(details.price - details.price * details.discount).toFixed(2)}
              </h3>
              <h3 className="original">${details.price.toFixed(2)}</h3>
              <p className="discount-price">
                {-(details.discount * 100).toFixed(0)}%
              </p>
            </>
          ) : (
            <h3>${details.price.toFixed(2)}</h3>
          )}
        </div>
        <p>{details.description}</p>
        <div className="container">
          <p>Select Colors</p>
          <div className="colors">
            {details.colors.map((color, index) => (
              <div
                key={index}
                className="color"
                style={{
                  backgroundColor: Object.values(color)[0],
                  width: "30px",
                  height: "30px",
                  position: "relative",
                }}
                onClick={() => setSelectedColor(index)}
              >
                {/* Checkmark icon */}
                {index === selectedColorIndex && (
                  <FaCheck
                    className="check-icon"
                    style={{
                      position: "absolute",
                      top: "25%",
                      left: "22%",
                      color: "white",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <p>Select Size</p>
          <div className="sizes">
            {details.sizes.map((size, index) => (
              <div
                key={index}
                className={`size ${
                  index === selectedSizeIndex ? "selected-2" : ""
                }`}
                onClick={() => setSelectedSize(index)}
              >
                <span>{size.size}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="container last-container">
          <div className="quantity-changer">
            <FaMinus className="btn-change" onClick={decrementCount} />
            <p>{count}</p>
            <FaPlus className="btn-change" onClick={incrementCount} />
          </div>
          <button
            className="btn-addcart"
            disabled={isAddingToCart}
            onClick={() => {
              handleAddToCart();
              setShowPopup(true);
              // Automatically close the popup after a few seconds
              setTimeout(() => {
                setShowPopup(false);
              }, 3500); // Adjust the time as needed (3 seconds in this example)
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
