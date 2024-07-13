import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import Slider from "../../components/slider/Slider";
import FeaturedProducts from "./FeaturedProducts";
import TopBrands from "./TopBrands";
import Review from "./Review";
import OurService from "./OurService";

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Key Haven | Home</title>
      </Helmet>
      <Slider />
      <Container>
        <FeaturedProducts />
        <OurService />
        <Review />
      </Container>
      <TopBrands />
    </div>
  );
};

export default Home;
