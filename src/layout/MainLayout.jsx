import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Discount from "../components/Discount/Discount";
import Footer from "../containers/Footer/Footer";
const MainLayout = ({children}) => {
    return (
        <div>
            <Discount />
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default MainLayout;