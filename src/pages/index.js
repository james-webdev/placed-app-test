import * as React from "react";
import Benefits from "../components/Benefits";
import CompyFetch from "../components/CompyFetch";
import ExclusiveJobOffers from "../components/ExclusiveJobOffers";
import Gallery from "../components/Gallery";
import Layout from "../components/layout/Layout";
import Olajide from "../components/Olajide";
import Others from "../components/Others";
import Ready from "../components/Ready";
import Related from "../components/Related";

const IndexPage = () => {
  return (
    <main>
      <title>Placed-App</title>
      <Layout>
        <div className="lg:mb-40 lg:mt-20">
          <CompyFetch />
        </div>
        <div className="">
          <ExclusiveJobOffers />
        </div>
        <div className="ml-5 sm:ml-20 mr-5 sm:mr-20">
          <Gallery />
        </div>
        <div className="ml-10 mr-10">
          <Olajide />
        </div>
        <div className="ml-5 sm:ml-20 mr-5 sm:mr-20">
          <Benefits />
        </div>
        <div className="">
          <Others />
        </div>
        <div className="">
          <Related />
        </div>
        <div className="">
          <Ready />
        </div>
      </Layout>
    </main>
  );
};

export default IndexPage;
