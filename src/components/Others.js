import React from "react";
import OthersSVG from "../svgs/OthersSVG";
import OthersSVG2 from "../svgs/OthersSVG2";

const Others = () => {
  return (
    <>
      <div className="hidden sm:block yellow pt-20 pb-20 flex flex-col justify-center items-center">
        <div className="text-black text-xl font-bold">
          <h1>Others About Us</h1>
        </div>
        <div className="flex flex-col lg:flex-row mt-8 ml-10 mr-10">
          <div className="samsung p-2">
            <OthersSVG />
          </div>
          <div className="samsung p-2">
            <OthersSVG2 />
          </div>
          <div className="samsung p-2">
            <OthersSVG />
          </div>
        </div>
        <div className="mt-4 lg:mt-8">
          <a
            className="border border-black font-semibold rounded-lg p-2"
            href=""
          >
            READ MORE
          </a>
        </div>
      </div>
    </>
  );
};

export default Others;
