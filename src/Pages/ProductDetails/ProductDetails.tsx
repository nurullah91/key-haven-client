import React from "react";
import { Helmet } from "react-helmet-async";

const ProductDetails: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Key Haven | Details</title>
      </Helmet>
      <h1 className="text-center font-bold text-3xl py-8 bg-blue-100">
        This is Product Details page
      </h1>
    </div>
  );
};

export default ProductDetails;
