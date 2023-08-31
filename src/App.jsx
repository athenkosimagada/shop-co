import React from "react";
import Discount from "./components/Discount/Discount";
import './App.css';
import Header from "./containers/Header/Header";

const App = () => {
    return (
        <div className="app">
            <Discount />
            <Header />
        </div>
    );
}

export default App;