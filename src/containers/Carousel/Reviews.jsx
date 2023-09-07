import React, { useEffect } from "react";
import Review from "../../components/Review/Review";
import { data } from '../../constants';
import './Reviews.css';
import Carousel from "react-elastic-carousel";

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 1200, itemsToShow: 3},
];

const Reviews = () => {
    useEffect(() => {
        const recArrowLeft = document.querySelector('.rec-arrow-left');

        // Check if the element exists before updating its innerHTML
        if (recArrowLeft) {
            // Change the inner HTML of the element
            recArrowLeft.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
        }
        const recArrowright = document.querySelector('.rec-arrow-right');

        // Check if the element exists before updating its innerHTML
        if (recArrowright) {
            // Change the inner HTML of the element
            recArrowright.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
        }
    }, []);
    return (
        <div className="carousel">
            <h1>OUR HAPPY CUSTOMERS</h1>
            <Carousel breakPoints={breakPoints}>
            {data.reviews.map((item, index) => (
                    <Review key={item + index} rate={item.rate} name={item.name} comment={item.comment}/>
              ))}
            </Carousel>
        </div>
    );
}

export default Reviews;