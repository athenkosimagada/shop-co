import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Discount from "../components/Discount/Discount";
import Footer from "../containers/Footer/Footer";

const MainLayout = ({ children, isFilterActive }) => {
    return (
      <div className={`page${isFilterActive ? 'show-filter-active' : ''}`}>
        {isFilterActive && <div className="overlay"></div>}
        <Discount />
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    );
  };
  
  export default MainLayout;