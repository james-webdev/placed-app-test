import React from "react";
import SvgComponent from "../svgs/ExclusiveSvg";

const ExclusiveJobOffers = () => {
  return (
    <>
      <div className="bg-black pt-20 pb-20 flex flex-col justify-center items-center">
        <div className="text-white font-bold">
          <h1>Exclusive job Offers</h1>
        </div>
        <div className="flex flex-col md:flex-row mt-5">
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
        <div>
          <a className="underline yellowtext" href="">
            See all
          </a>
        </div>
      </div>
    </>
  );
};

export default ExclusiveJobOffers;
