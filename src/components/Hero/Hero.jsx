import React from "react";
import { images } from '../../constants';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p>Browse through our diverse range of meticulously crafted garments, 
                    designed to bring out your individuality and cater to your sense of style.</p>
                <a href="#" className="button">Sho Now</a>
                <div className="numbers">
                    <div className="numbers-item">
                        <h2>200+</h2>
                        <p>International Brands</p>
                    </div>
                    <div className="numbers-item">
                        <h2>2,000+</h2>
                        <p>High-Quality Products</p>
                    </div>
                    <div className="numbers-item">
                        <h2>30,000+</h2>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src={images.hero} alt="Hero Image"/>
                <img id='vector1' src={images.vector1} alt="Hero Image"/>
                <img id='vector2'src={images.vector2} alt="Hero Image"/>
            </div>
        </div>
    );
}

export default Hero;