import React from "react";
import { Helmet } from "react-helmet-async";

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Key Haven | Home</title>
      </Helmet>
      <h1 className="text-center font-bold text-3xl py-8 bg-blue-100">
        This is Home page
      </h1>
    </div>
  );
};

export default Home;
