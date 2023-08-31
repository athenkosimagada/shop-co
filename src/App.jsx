import React from "react";
import Discount from "./components/Discount/Discount";
import './App.css';
import Header from "./containers/Header/Header";
import Brand from "./components/Brands/Brand";

const App = () => {
    return (
        <div className="app">
            <Discount />
            <Header />
            <Brand />
        </div>
    );
}

export default App;