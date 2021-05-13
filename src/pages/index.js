import * as React from "react";
import CompyFetch from "../components/CompyFetch";
import ExclusiveJobOffers from "../components/ExclusiveJobOffers";
import Gallery from "../components/Gallery";
import Layout from "../components/layout/Layout";
import Olajide from "../components/Olajide";

const IndexPage = () => {
  return (
    <main>
      <title>Placed-App</title>
      <Layout>
        <div className="mb-40 mt-20">
          <CompyFetch />
        </div>
        <div>
          <ExclusiveJobOffers />
        </div>
        <div>
          <Gallery />
        </div>
        <div>
          <Olajide />
        </div>
      </Layout>
    </main>
  );
};

export default IndexPage;
