import React, { useState } from "react";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import "./Banner.scss";

const Banner = ({ photos }) => {
  const [index, setIndex] = useState(0);
  const changeNext = () => {
    if (index !== photos.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const changePrevious = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(3);
    }
  };

  return (
    <div className="baner">
      <BsFillArrowLeftCircleFill
        className="baner__arrow-left1"
        onClick={() => changeNext()}
      />
      <img className="baner__img" src={photos[index]} alt={photos[index]} />
      <BsFillArrowRightCircleFill
        className="baner__arrow-right1"
        onClick={() => changePrevious()}
      />
    </div>
  );
};

export default Banner;
