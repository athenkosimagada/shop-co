import React from "react";
import './App.css';
import Brand from "./components/Brands/Brand";
import New from "./containers/New/New";
import { data } from './constants';
import Browse from "./containers/Browse/Browse";
import Reviews from "./containers/Carousel/Reviews";
import MainLayout from "./layout/MainLayout";
import Hero from "./components/Hero/Hero";

const App = () => {
    return (
        <MainLayout>
            <div className="app">
                <Hero />
                <Brand id="brands"/>
                <New id="new-arrivals" key={1} data={data.clothes} topic="NEW ARRIVALS" value={true} newData={true}/>
                <New key={2} data={data.clothes} topic="TOP SELLING" value={false} newData={false}/>
                <Browse />
                <Reviews />
            </div>
        </MainLayout>
    );
}

export default App;