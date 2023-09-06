import React from "react";
import Review from "../../components/Review/Review";
import { data } from '../../constants';
import './Reviews.css';

const Reviews = () => {

    return (
        <div className="carousel">
            <h1>OUR HAPPY CUSTOMERS</h1>
            {data.reviews.map((item, index) => (
                    <Review key={item + index} rate={item.rate} name={item.name} comment={item.comment}/>
              ))}
        </div>
    );
}

export default Reviews;