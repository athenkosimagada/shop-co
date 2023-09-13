import React, { useState } from "react";
import './New.css';
import NewItem from "../../components/NewItem/NewItem";
import { Link } from "react-router-dom";

const New = ({ data, topic, value }) => {
    const [pressed, setPressed] = useState(false);
    function handClick() {
        setPressed(!pressed);
    }

    const borderStyle = value ? { borderBottom: '1px solid #a9a9a9' } : {};
    return (
        <div className="new">
            <h1>{topic}</h1>
            <div style={borderStyle} className="new-content">
                <div className={pressed ? "show-all" : "new-arrivals"}>
                    {data.map((item, index) => (
                        <Link to={`/shop/${index}`} key={item + index}>
                            <NewItem key={item + index} imgUrl={item.imgUrl} title={item.title} price={item.price} rate={item.rate} discount={item.discount} />
                        </Link>
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