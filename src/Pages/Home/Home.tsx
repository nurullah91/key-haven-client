import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import Slider from "../../components/slider/Slider";
import FeaturedProducts from "./FeaturedProducts";
import TopBrands from "./TopBrands";

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Key Haven | Home</title>
      </Helmet>
      <Slider />
      <Container>
        <FeaturedProducts />
      </Container>
      <TopBrands />
    </div>
  );
};

export default Home;
