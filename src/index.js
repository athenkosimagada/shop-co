import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Arrivals from './pages/NewArrivals/Arrivals';
import { data } from './constants';
import Cart from './pages/Cart/Cart';

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
    path: "/shop",
    element: <Arrivals data={data.clothes} currentPageName="Shop" />
  },
  {
    path: "/shop/men",
    element: <Arrivals data={data.clothes.filter((item) => item.gender === "Men")} currentPageName="Men" />
  },
  {
    path: "/shop/women",
    element: <Arrivals data={data.clothes.filter((item) => item.gender === "Women")} currentPageName="Women" />
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/search_results",
    element: <Arrivals data={data.clothes} currentPageName="Search Results"/>,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />, 
  document.getElementById("root"));
