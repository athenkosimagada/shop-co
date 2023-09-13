import React from "react";
import MainLayout from "../layout/MainLayout";
import Details from "../containers/Details/Details";
import { useParams } from "react-router-dom";
import { data } from "../constants";

const ProductDetails = () => {
const params = useParams();
    return (
        <MainLayout>
            <div className="product-details">
                <Details data={data.arrivals[params.id]}/>
            </div>
        </MainLayout>
    );
}

export default ProductDetails;