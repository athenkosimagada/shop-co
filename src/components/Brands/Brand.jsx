import React from "react";
import { images } from '../../constants';
import './Brand.css';

const Brand = () => {
    return (
        <div className="brand">
         <img src={images.versace} alt="Versace" />
         <img src={images.zara} alt="Zara" />
         <img src={images.gucci} alt="Gucci" />
         <img src={images.prada} alt="Prada" />
         <img src={images.calvin} alt="Calvin Klein" />
        </div>
    );
}

export default Brand;