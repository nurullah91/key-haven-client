import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";

const Error: React.FC = () => {
  return (
    <div className="w-full h-screen bg-blue-950 flex items-center justify-center">
      <div className="px-6 py-10 flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-5xl w-fit text-white">
          oooopps
        </h1>
        <h1 className="text-center font-bold text-xl  my-2 w-fit text-white">
          an error occurred
        </h1>

        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
