import React from "react";
import './New.css';
import NewItem from "../../components/NewItem/NewItem";
import { images } from '../../constants';

const New = () => {
    return (
        <div className="new">
            <h1>NEW ARRIVALS</h1>
            <div className="new-arrivals">
                <NewItem item={images.frame32} title="T-shirt with Tape Details" price="$120" rate={4.3}/>
                <NewItem item={images.frame33} title="Skinny Fit Jeans" price="$240" rate={5}/>
                <NewItem item={images.frame34} title="Checkered Shirt" price="$180" rate={4}/>
                <NewItem item={images.frame38} title="Sleeve Striped T-shirt" price="$130" rate={3.5}/>
            </div>
        </div>
    );
}

export default New;