import React from "react";
import './Discount.css';
import { IoIosClose } from "react-icons/io";

const Discount = () => {
    return (
        <div className="discount flex-center">
            <p>Sign up and get 20% off to your first order. <a className="link" href="http://">Sign Up Now</a></p>
            <span className="close"><IoIosClose /></span>
        </div>
    );
}

export default Discount;