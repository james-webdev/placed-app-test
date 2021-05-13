import React, { useState, useEffect } from "react";

const PhotosCarousel = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.placed-app.com/api/v1/venue/marketing/beta-brand-page/gourmet-burger-kitchen"
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos.carousel);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded justify-center items-center content-center justify-items-center">
        {photos.map((item, index) => (
          <img
            className="p-1 w-60 h-40"
            style={{ borderRadius: "25px" }}
            src={item}
          />
        ))}
        <div
          style={{ borderRadius: "25px" }}
          className="bg-gray-100 p-10 text-gray-600 h-40 w-60 flex justify-center items-center"
        >
          {" "}
          GALLERY
        </div>
      </div>
    </>
  );
};

export default PhotosCarousel;
