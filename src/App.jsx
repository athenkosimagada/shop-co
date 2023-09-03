import React from "react";
import Discount from "./components/Discount/Discount";
import './App.css';
import Header from "./containers/Header/Header";
import Brand from "./components/Brands/Brand";
import New from "./containers/New/New";

const App = () => {
    return (
        <div className="app">
            <Discount />
            <Header />
            <Brand />
            <New />
        </div>
    );
}

export default App;