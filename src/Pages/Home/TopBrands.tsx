import React from "react";
import SectionHeader from "../../components/SectionHeader";
import Marquee from "react-fast-marquee";
import { brandInfo } from "./brandInfo";

const TopBrands: React.FC = () => {
  return (
    <div className="my-12">
      <SectionHeader
        title="Top Featured Brands"
        description="Explore or top featured brands and find your best loving brand to buy a brand new mechanical keyboard for best experience"
      />
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
