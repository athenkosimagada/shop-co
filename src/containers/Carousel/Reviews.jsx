import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Review from "../../components/Review/Review";
import { data } from '../../constants';
import './Reviews.css';

const Reviews = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div className="carousel">
            <h1>OUR HAPPY CUSTOMERS</h1>
            <Carousel className="review-items" responsive={responsive}>
            {data.reviews.map((item, index) => (
                    <Review key={item + index} rate={item.rate} name={item.name} comment={item.comment}/>
            ))}
            </Carousel>
        </div>
    );
}

export default Reviews;