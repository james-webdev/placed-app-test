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
        <div className="border border-black mb-10 sm:mb-40 mt-20">
          <CompyFetch />
        </div>
        <div className="border border-black">
          <ExclusiveJobOffers />
        </div>
        <div className="border border-black ml-5 sm:ml-20 mr-5 sm:mr-20">
          <Gallery />
        </div>
        <div className="border border-black ml-10 mr-10">
          <Olajide />
        </div>
        <div className="border border-black ml-5 sm:ml-20 mr-5 sm:mr-20">
          <Benefits />
        </div>
        <div className="border border-black">
          <Others />
        </div>
        <div className="border border-black">
          <Related />
        </div>
        <div className="border border-black">
          <Ready />
        </div>
      </Layout>
    </main>
  );
};

export default IndexPage;
