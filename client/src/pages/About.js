import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
      <Layout title={"About us - Ecommerce"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpg"
            alt="contact"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">About us</h1>
         About us
        </div>
      </div>
    </Layout>
  );
};

export default About;
