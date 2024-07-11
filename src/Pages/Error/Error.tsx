import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl py-8 bg-blue-100">
        This is Error page
      </h1>
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
