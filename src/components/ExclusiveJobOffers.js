import React from "react";
import SvgComponent from "../svgs/ExclusiveSvg";

const ExclusiveJobOffers = () => {
  return (
    <>
      <div className="bg-black pt-20 pb-20 flex flex-col justify-center items-center sm:-mt-32">
        <div className="text-white font-bold">
          <h1>Exclusive job Offers</h1>
        </div>
        <div className="flex flex-col lg:flex-row mt-5">
          <div className="p-2">
            <SvgComponent />
          </div>
          <div className="p-2">
            <SvgComponent />
          </div>
          <div className="p-2">
            <SvgComponent />
          </div>
        </div>
        <div className="lg:mt-8">
          <a className="underline yellowtext" href="">
            See all
          </a>
        </div>
      </div>
    </>
  );
};

export default ExclusiveJobOffers;
