import React, { useState, useEffect } from "react";
import axios from "axios";
import Subscribe from "../components/Subscribe";

const Compy = () => {
  const [state, setState] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.placed-app.com/api/v1/venue/marketing/beta-brand-page/gourmet-burger-kitchen"
      );

      console.log(result.data);
      setState(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <div>{Object.values(state.details)}</div> */}
      <div>
        <Subscribe />
      </div>
    </>
  );
};

export default Compy;
