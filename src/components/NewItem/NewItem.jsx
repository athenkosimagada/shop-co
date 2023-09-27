import React from "react";
import './NewItem.css';
import { FaStar } from "react-icons/fa";

const NewItem = ({ imgUrl, title, price, rate, discount }) => {
  const fullStars = Math.floor(rate);
  const decimalPart = rate - fullStars;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} size={20} style={{ color: 'gold' }} />);
    } else if (i === fullStars && decimalPart > 0) {
      stars.push(
        <FaStar
          key="half"
          size={20}
          style={{
            color: 'gold',
            clipPath: `polygon(0% 0%, ${decimalPart * 100}% 0%, ${decimalPart * 100}% 100%, 0% 100%)`,
          }}
        />
      );
    } else {
      stars.push(<FaStar key={i} size={20} style={{ color: 'white' }} />);
    }
  }

  return (
    <div className="new-item">
      <img src={imgUrl} alt="Clothes" />
      <p>{title}</p>
      <div className="rate">
        <div className="star-rating">{stars}</div>
        <p>{rate.toFixed(1)}/5</p>
      </div>
      <div className="price">
        {discount > 0 ? (
          <>
            <h3>${(price - price * discount).toFixed(2)}</h3>
            <h3 className="original">${price.toFixed(2)}</h3>
            <p className="discount-price">{-(discount * 100).toFixed(0)}%</p>
          </>
        ) : (
            <h3>${price.toFixed(2)}</h3>
        )}
      </div>
      
    </div>
  );
}

export default NewItem;
