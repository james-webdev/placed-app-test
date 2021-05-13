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
    <div className="border border-black p-4 flex flex-col md:flex-row">
      <div className="border border-black w-1/3 font-sans">
        <div className="p-4" dangerouslySetInnerHTML={{ __html: `${details}` }} />
      </div>
      <div className="border border-black w-2/3">
        <PhotosCarousel />
      </div>
    </div>
  );
};

export default Gallery;
