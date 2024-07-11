import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/products",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "details/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
