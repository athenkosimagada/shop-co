import React from "react";
import MainLayout from "../layout/MainLayout";
import Details from "../containers/Details/Details"

const ProductDetails = () => {
    return (
        <MainLayout>
            <div className="product-details">
                <Details />
            </div>
        </MainLayout>
    );
}

export default ProductDetails;