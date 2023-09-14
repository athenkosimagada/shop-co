import React from "react";
import "./Details.css";

const Details = ({ data }) => {
    console.log(data);
    return (
        <div className="details">
               <h1>This is details</h1>
               <p>{data.title}</p>
               <img src={data.imgUrls[0].imgFront} alt="" />
            </div>
    );
}

export default Details;