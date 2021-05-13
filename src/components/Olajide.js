import React, { useState, useEffect } from "react";
import Quote from "../svgs/Quotes";

const Olajide = () => {
  const [OlajidePhoto, setOlajidePhoto] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.placed-app.com/api/v1/venue/marketing/beta-brand-page/gourmet-burger-kitchen"
    )
      .then((response) => response.json())
      .then((data) => {
        setOlajidePhoto(data.main_quote);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center sm:flex sm:flex-row mt-10 mb-10 relative">
        <div
          className="p-2 h-96 w-96 flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url(${OlajidePhoto.footer_photo})`,
            backgroundSize: "100%",
            objectFit: "cover",
            borderRadius: "25px",
            marginLeft: "30px",
            marginRight: "30px",
            zIndex: "1",
          }}
        >
          <p className="text-white text-2xl font-bold">Olajide Alabi</p>
          <p className="text-white">Diversity & Inclusion Specialist</p>
        </div>
        <div className="hidden lg:block lg:absolute lg:z-10 lg:top-8">
          <Quote />
        </div>
        <div className="rounded bg-gray-200 m-3 w-full ml-10 mr-10 sm:w-1/2 sm:-ml-8 z-0">
          <p className="p-4 font-sans">
            As a Black, African, Gay man, I want Inclusion to be a right and not
            a privilege for a select few. For people not to be tolerated as
            being different, but accepted. We live in a diverse world and we can
            learn so much from each other. I can empathise with marginalised
            groups, having being a part of one all my life, and learning how to
            steer myself in the workplace to 'fit in' I can empathise with
            marginalised groups, having being a part of one all my life, and
            learning how to steer myself in the workplace to 'fit in'...
          </p>
        </div>
      </div>
    </>
  );
};

export default Olajide;
