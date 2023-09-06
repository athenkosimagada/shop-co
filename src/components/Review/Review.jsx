import React from "react";
import { FaStar } from 'react-icons/fa';
import './Review.css';


const Review = ({rate, name, comment}) => {
    // Calculate the number of full stars and the decimal part
  const fullStars = Math.floor(rate);
  const decimalPart = rate - fullStars;

  // Create an array to represent the stars
  const stars = [];

  // Add full stars with gold color and empty stars with white color
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} size={20} style={{ color: 'gold' }} />);
    } else if (i === fullStars && decimalPart > 0) {
      // Render a fractional star in gold color
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
        <div className="review">
            <div className="star-rating">{stars}</div>
            <h2>{name}<i class="fa-solid fa-circle-check"></i></h2>
            <p>{comment}</p>
        </div>
    );
}

export default Review;