import React, { useState } from "react";

import "./SingleProductsHome.css";
const SingelProductsHome = ({ prod }) => {
  return (
    <div className="line-home">
      <img className="img-home" src={prod.image} alt={prod.name1} />
      <h5 style={{ color: "black" }}>{prod.name1}</h5>
      <div className="description-home">
        <div>{prod.price}$ </div>
        {/* <spam>{prod.fast ? <div>Fast Deliver</div> : "4 days deliver"}</spam> */}
        <div>ocena:{prod.ratings}/5</div>{" "}
      </div>
    </div>
  );
};

export default SingelProductsHome;
