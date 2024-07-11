import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import Slider from "../../components/slider/Slider";

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Key Haven | Home</title>
      </Helmet>
      <Slider />
      <Container>
        <h1 className="text-center font-bold text-3xl py-8 bg-blue-100 mt-5">
          This is Home page
        </h1>
      </Container>
    </div>
  );
};

export default Home;
