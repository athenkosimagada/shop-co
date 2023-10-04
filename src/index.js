import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Brands from './pages/Brands/Brands';
import Arrivals from './pages/NewArrivals/Arrivals';
import Sale from './pages/Sale/Sale';
import { data } from './constants';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop/:id",
    element: <ProductDetails />,
  },
  {
    path: "/sale",
    element: <Arrivals data={data.clothes.filter((item) => item.discount > 0)} currentPageName="On Sale" />,
  },
  {
    path: "/arrivals",
    element: <Arrivals data={data.clothes.filter((item) => item.new === true)} currentPageName="New Arrivals" />,
  },
  {
    path: "/brands",
    element: <Brands />
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />, 
  document.getElementById("root"));
