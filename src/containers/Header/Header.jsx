import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <Hero />
        </div>
    );
}

export default Header;