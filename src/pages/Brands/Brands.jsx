import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import Brand from "../../components/Brands/Brand";

const Brands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <div>
        <Brand/>
      </div>
    </MainLayout>
  );
};

export default Brands;
