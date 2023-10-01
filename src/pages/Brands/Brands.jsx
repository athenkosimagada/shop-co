import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import Brand from "../../components/Brands/Brand";
import { Link } from "react-router-dom";
import "./Brands.css";

const Brands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <div className="brands">
        <div className="navigation">
          <Link to="/">
            <p>Home</p> <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <p>Brands</p>
        </div>
        <div>
          <Brand />
        </div>
      </div>
    </MainLayout>
  );
};

export default Brands;
