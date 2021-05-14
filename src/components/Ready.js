import React from "react";
import O2 from "../images/CaptureO2.png";
import Kitchen from "../images/CaptureKitchen.png";

const Ready = () => {
  return (
    <div className="readycolour flex flex-col md:flex md:flex-row justify-center items-between">
      <div className="sm:w-1/3">
        <img src={O2} alt="" />
      </div>
      <div className="text-white sm:w-1/3 flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold font-sans">
          Ready for something different
        </h1>
        <div className="pt-5 text-center ml-5 mr-5 font-sans">
          <p>
            You’re more than just a name on a PDF. Embrace an app that helps you
            find and apply for jobs in a way that feels natural to you. That
            means no CVs, no cover letters and access to employers that pick on
            personality not just experience
          </p>
        </div>
        <button className="mt-5">
          <p className="yellow text-black rounded p-3">START APPLYING</p>
        </button>
      </div>
      <div className="sm:w-1/3 mt-5 sm:mt-0">
        <img src={Kitchen} alt="" />
      </div>
    </div>
  );
};

export default Ready;
