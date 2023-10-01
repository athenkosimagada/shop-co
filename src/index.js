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
    element: <Sale />,
  },
  {
    path: "/arrivals",
    element: <Arrivals />,
  },
  {
    path: "/brands",
    element: <Brands />
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />, 
  document.getElementById("root"));
