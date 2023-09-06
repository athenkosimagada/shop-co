import React from "react";
import Discount from "./components/Discount/Discount";
import './App.css';
import Header from "./containers/Header/Header";
import Brand from "./components/Brands/Brand";
import New from "./containers/New/New";
import { data } from './constants';
import Browse from "./containers/Browse/Browse";

const App = () => {
    return (
        <div className="app">
            <Discount />
            <Header />
            <Brand />
            <New key={1} data={data.arrivals} topic="NEW ARRIVALS"/>
            <New key={2} data={data.top} topic="TOP SELLING"/>
            <Browse />
        </div>
    );
}

export default App;