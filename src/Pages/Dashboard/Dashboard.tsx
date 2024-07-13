import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Key Haven | Dashboard</title>
      </Helmet>
      <Container>
        <div className="flex flex-col justify-between min-h-[calc(100vh-100px)]">
          <div>Product management</div>
          <Link
            to="/dashboard/add-product"
            className="btn btn-block myPrimaryBtn"
          >
            Add a Product
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
