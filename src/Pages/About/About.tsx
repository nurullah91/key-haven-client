import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";

const About: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Key Haven | About</title>
      </Helmet>
      <Container>
        <div>
          <SectionHeader title="About Us" description=" " />
          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              Company Story:{" "}
            </h2>
            <p className="mb-3">
              At Key Haven, we embarked on our journey driven by a passion for
              mechanical keyboards and a vision to create a haven for
              enthusiasts. Founded by <b>Md Nurullah Bhuiyan</b> in 2024, our
              story began with a simple yet ambitious goal: to curate and
              deliver the finest mechanical keyboards that blend cutting-edge
              technology with unparalleled craftsmanship.
            </p>
            <p className="mb-3">
              From humble beginnings, we've grown into a trusted destination for
              keyboard aficionados worldwide. Our dedication to quality,
              innovation, and customer satisfaction fuels every decision we
              make, ensuring that each product reflects our commitment to
              excellence.
            </p>
            <p className="mb-3">
              Join us as we continue to evolve, innovate, and inspire the
              keyboard community, one keystroke at a time.
            </p>
          </div>
          <div className="my-6">
            <h2 className="text-2xl font-bold text-blue-500">
              Our Mission and Vision:{" "}
            </h2>
            <p className="mb-3">
              <span className="text-xl font-bold mr-2">Mission: </span> Our
              mission at Key Haven is to empower enthusiasts with exceptional
              mechanical keyboards that enhance their computing experience. We
              strive to offer a diverse selection of premium products coupled
              with outstanding customer service, ensuring every interaction is a
              delightful experience.
            </p>
            <p className="mb-3">
              <span className="text-xl font-bold mr-2">Vision: </span>Our vision
              is to lead the industry in innovation and customer satisfaction.
              We envision a future where every keyboard enthusiast finds their
              perfect match, supported by a community-driven platform that
              fosters creativity, collaboration, and continuous improvement.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
