import React from "react";
import SectionHeader from "../../components/SectionHeader";
import Marquee from "react-fast-marquee";
import { brandInfo } from "./brandInfo";
import Container from "../../components/Container";

const TopBrands: React.FC = () => {
  return (
    <div className="my-12">
      <Container>
        <SectionHeader
          title="Top Featured Brands"
          description="Explore the leading brands known for their quality and innovation in the mechanical keyboard world. From established names to rising stars, find your favorite. Elevate your typing experience."
        />
      </Container>
      <div className="my-6">
        <Marquee>
          {brandInfo.map((logo, index) => (
            <div key={index}>
              <img src={logo} alt="logo" className="grayscale" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
