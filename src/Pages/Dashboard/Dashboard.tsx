import React from "react";
import { Helmet } from "react-helmet-async";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Key Haven | Dashboard</title>
      </Helmet>
      <h1 className="text-center font-bold text-3xl py-8 bg-blue-100">
        This is Dashboard page
      </h1>
    </div>
  );
};

export default Dashboard;
