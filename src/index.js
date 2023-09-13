import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop/:id",
    element: <ProductDetails />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />, 
  document.getElementById("root"));
