import React from "react";
import './Browse.css';
import { images } from '../../constants';

const Browse = () => {
    return (
        <div className="browse">
           <h1>BROWSE BY DRESS STYLE</h1>
           <div className="styles">
           <div className="top">
                <div className="style">
                    <h2>Casual</h2>
                    <img src={images.casual} alt="Casual image" />
                </div>
                <div className="style">
                    <h2>Formal</h2>
                    <img src={images.formal} alt="Formal image" />
                </div>
            </div>
            <div className="last">
                <div className="style">
                    <h2>Party</h2>
                    <img src={images.party} alt="Party image" />
                </div>
                <div className="style">
                    <h2>Gym</h2>
                    <img src={images.gym} alt="Gym image" />
                </div>
            </div>
           </div>
        </div>
    );
}

export default Browse;