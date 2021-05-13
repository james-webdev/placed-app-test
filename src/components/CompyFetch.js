import React, { useState, useEffect } from "react";
import Subscribe from "../components/Subscribe";
import BurgerLogo from "../svgs/BurgerLogo";
import TopImage from "../svgs/TopImage";

const CompyFetch = () => {
  const [Logo, setLogo] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.placed-app.com/api/v1/venue/marketing/beta-brand-page/gourmet-burger-kitchen"
    )
      .then((response) => response.json())
      .then((data) => {
        setLogo(data.photos);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative">
        {" "}
        <div className="absolute -z-1 hidden lg:block">
          <TopImage />
        </div>
        <div className="z-10">
          <img
            style={{
              borderRadius: "25px",
            }}
            className="w-28"
            src={Logo.logo}
            alt=""
          />
        </div>
        <div className="z-10">
          <p>
            <h1 className="text-2xl z-10 text-black sm:text-white font-bold font-sans">
              Gourmet Burger Kitchen
            </h1>
          </p>
          <p>
            <h5 className="text-black text-center sm:text-white font-sans">
              Fine Dining Michelin Star restaurant
            </h5>
          </p>
        </div>
        <div className="m-5 z-10">
          <Subscribe />
        </div>
      </div>
    </>
  );
};

export default CompyFetch;
