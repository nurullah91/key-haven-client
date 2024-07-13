import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Contact: React.FC = () => {
  return (
    <div className="">
      <Helmet>
        <title>Key Haven | Contact</title>
      </Helmet>
      <Container>
        <SectionHeader title="Contact Us" description=" " />

        <div className="flex flex-col items-center justify-center my-6">
          <div className="flex items-center gap-2">
            <MdEmail className="text-2xl text-blue-800" />
            <h2 className="text-xl font-semibold">sample@keyhaven.com</h2>
          </div>

          <div className="flex items-end">
            <IoLocationSharp className="text-3xl text-blue-800" />
            <h2 className="text-xl font-semibold">Kawnia Housing, Barishal</h2>
          </div>
          <h2 className="font-semibold">Key Haven Tower, 8th Flor</h2>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xl text-blue-800" />
            <h2 className="font-semibold">Phone: 0170000000</h2>
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-center text-xl mb-2 mt-6">
              Where we are{" "}
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14720.998505629319!2d90.34179879605311!3d22.718961313030764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375536a6c8af33f3%3A0x50adbaa202591950!2sKawnia%2C%20Barishal!5e0!3m2!1sen!2sbd!4v1720882706753!5m2!1sen!2sbd"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
