import React, { useState, useEffect } from "react";
import PhotosCarousel from "./PhotosCarousel";

const Gallery = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.placed-app.com/api/v1/venue/marketing/beta-brand-page/gourmet-burger-kitchen"
    )
      .then((response) => response.json())
      .then((data) => {
        setDetails(data.about);
      });
  }, []);

  return (
    <div className="p-4 flex flex-col md:flex-row -mt-10 justify-center items-center">
      <div className="w-full sm:w-1/3 mt-10 font-sans">
        <div
          className="p-4 max-w-lg"
          dangerouslySetInnerHTML={{ __html: `${details}` }}
        />
      </div>
      <div className="w-full sm:w-2/3">
        <PhotosCarousel />
      </div>
    </div>
  );
};

export default Gallery;
