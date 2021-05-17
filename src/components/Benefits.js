import React from "react";
import Cycle from "../svgs/Cycle";
import Placed from "../svgs/Placed";
import Referrals from "../svgs/Referrals";
import Tips from "../svgs/Tips";

const Benefits = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-10 mb-10 justify-center items-center">
      <div className="lg:w-1/2 xl:flex xl:justify-end lg:ml-6">
        <div className="text-2xl font-bold font-sans ">
          <h1>Benefits</h1>
        </div>
        <div className="mt-6 font-sans max-w-xl">
          <ul>
            <li className="p-1">
              {" "}
              • It all started back in 2001 when three Kiwi guys set up the
              first Gourmet Burger Kitchen in London.{" "}
            </li>
            <li className="p-1">
              • Word quickly got around - and soon their fresh, quality burgers
              served up with a dash of personality and fun were a gigantic hit.
            </li>
            <li className="p-1">
              • Before long new restaurants started popping up all over the
              place - and now there’s 76 of them across the country.
            </li>
            <li className="p-1">
              • But you know what we’ve learned along the way? GBK’s success is
              all about its people. Close-knit teams who love what they do and
              light up the place with laughter.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:w-1/2 p-4 relative w-90%">
        <div className="hidden lg:block lg:absolute z-0 w-40 sm:left-56">
          <Placed />
        </div>
        <div className="m-2 z-10">
          <Cycle />
        </div>
        <div className="m-2 z-10">
          <Referrals />
        </div>
        <div className="m-2 z-10">
          <Tips />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
