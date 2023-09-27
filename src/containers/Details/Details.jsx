import React, { useState } from "react";
import "./Details.css";

import { FaStar, FaCheck,FaPlus, FaMinus } from "react-icons/fa";

function Details({ data }) {
  const [image, setImage] = useState(data.imgUrls[0]?.pic);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [count, setCount] = useState(1);

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
  const fullStars = Math.floor(data.rate);
  const decimalPart = data.rate - fullStars;

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

  return (
    <div className="details">
      <div className="images">
        <div className="img-3">
          {data.imgUrls.map((img, index) => (
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
        <h1>{data.title}</h1>
        <div className="rate">
          <div className="star-rating">{stars}</div>
          <p>{data.rate.toFixed(1)}/5</p>
        </div>

        <div className="price">
          {data.discount > 0 ? (
            <>
              <h3>${(data.price - data.price * data.discount).toFixed(2)}</h3>
              <h3 className="original">${data.price.toFixed(2)}</h3>
              <p className="discount-price">
                {-(data.discount * 100).toFixed(0)}%
              </p>
            </>
          ) : (
            <h3>${data.price.toFixed(2)}</h3>
          )}
        </div>
        <p>{data.description}</p>
        <div className="container">
          <p>Select Colors</p>
          <div className="colors">
            {data.colors.map((color, index) => (
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
            {data.sizes.map((size, index) => (
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
              <FaMinus onClick={decrementCount} />
              <p>{count}</p>
              <FaPlus onClick={incrementCount} />
          </div>
          <button type="button" className="btn-addcart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
