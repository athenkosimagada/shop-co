import React, { useState } from "react";
import './New.css';
import NewItem from "../../components/NewItem/NewItem";

const New = ({ data, topic }) => {
    const [pressed, setPressed] = useState(false);
    function handClick(){
        setPressed(!pressed);
    }
    return (
        <div className="new">
            <h1>{topic}</h1>
            <div className="new-content">
                <div className={pressed ? "show-all" : "new-arrivals"}>
                    {data.map((item, index) => (
                    <NewItem key={item + index} imgUrl={item.imgUrl} title={item.title} price={item.price} rate={item.rate} discount={item.discount}/>
                    ))}
                </div>
                <div className="bottom">
                    <button className="view-button" type="button" onClick={handClick}>View All</button>
                </div>
            </div>
        </div>
    );
}

export default New;