import React from "react";
import "./Details.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Details = ({ data }) => {
  // Calculate the number of full stars and the decimal part
  const fullStars = Math.floor(data.rate);
  const decimalPart = data.rate - fullStars;

  // Create an array to represent the stars
  const stars = [];

  // Add full stars with gold color and empty stars with white color
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} size={20} style={{ color: "gold" }} />);
    } else if (i === fullStars && decimalPart > 0) {
      // Render a fractional star in gold color
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
      <div className="menu-path">
        <Link to="/">Home</Link>
        <i class="fa-solid fa-chevron-right"></i>
        <Link to="#">Shop</Link>
        <i class="fa-solid fa-chevron-right"></i>
        <Link to="#">Men</Link>
        <i class="fa-solid fa-chevron-right"></i>
        <span>{data.type}</span>
      </div>

      <div className="product">
        <div className="product-images">
          <div className="choice-img">
            <img className="choosen" src={data.imgUrls[0].imgFront} alt="" />
            <img src={data.imgUrls[0].imgBack} alt="" />
            <img src={data.imgUrls[0].imgPerson} alt="" />
          </div>
          <div className="main-img">
            <img src={data.imgUrls[0].imgFront}alt="" />
          </div>
        </div>
        <div className="product-details">
          <h1>{data.title}</h1>
          <div className="rate">
            <div className="star-rating">{stars}</div>
            <p>{data.rate.toFixed(1)}/5</p>
          </div>
          <div className="price">
            {data.discount > 0 ? (
              <>
                <h2>${(data.price - data.price * data.discount).toFixed(2)}</h2>
                <h2 className="original">${data.price.toFixed(2)}</h2>
                <p className="discount-price">
                  {-(data.discount * 100).toFixed(0)}%
                </p>
              </>
            ) : (
              <h2>${data.price.toFixed(2)}</h2>
            )}
          </div>
          <p>{data.description}</p>
          <div className="details-item">
            <p>Select Colors</p>
            <div className="select">
              <div className="prodict-color">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="prodict-color"></div>
              <div className="prodict-color"></div>
            </div>
          </div>
          <div className="details-item">
            <p>Choose Size</p>
            <div className="select">
            <div className="prodict-size">Small</div>
            <div className="prodict-size">Medium</div>
            <div className="prodict-size">Large</div>
            <div className="prodict-size">X-Large</div>
            </div>
          </div>
          <div className="details-item">
            <div className="select">
            <div className="count">
              <i class="fa-solid fa-minus"></i>
              <span className="count-num">1</span>
              <i class="fa-solid fa-plus"></i>
            </div>
            <a className="add-cart" href="#">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
