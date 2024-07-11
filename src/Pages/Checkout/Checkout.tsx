import React from "react";
import { Helmet } from "react-helmet-async";

const Checkout: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Key Haven | Checkout</title>
      </Helmet>
      <h1 className="text-center font-bold text-3xl py-8 bg-blue-100">
        This is Checkout page
      </h1>
    </div>
  );
};

export default Checkout;
