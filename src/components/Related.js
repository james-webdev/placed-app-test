import React from "react";
import Line from "../svgs/Line";
import RelatedSVG from "../svgs/RelatedSVG";

const Related = () => {
  return (
    <>
      <div className="readycolour pt-20 pb-20 flex flex-col justify-center items-center">
        <div className="text-white text-xl font-bold font-sans">
          <h1>Related Brands</h1>
        </div>
        <div className="flex flex-col lg:flex-row mt-8 ml-10 mr-10">
          <div className="p-2">
            <RelatedSVG />
          </div>
          <div className="p-2">
            <RelatedSVG />
          </div>
          <div className="p-2">
            <RelatedSVG />
          </div>
        </div>
      </div>
      {/* <div>
        <Line />
      </div> */}
    </>
  );
};

export default Related;
