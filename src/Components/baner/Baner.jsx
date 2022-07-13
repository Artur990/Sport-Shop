import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import "./Baner.css";

function Baner({ photos }) {
  const [index, setIndex] = useState(0);
  console.log(index !== 3);
  const changeNext = () => {
    if (index !== photos.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  console.log(index, index);
  const changePrevious = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(3);
    }
  };

  return (
    <div className="main-heder">
      <div className="arrow-left">
        <BsFillArrowLeftCircleFill
          className="arrow-left1"
          onClick={() => changeNext()}
        />
      </div>

      <img className="main-img" src={photos[index]} alt="22" />
      <div className="arrow-right">
        <BsFillArrowRightCircleFill
          className="arrow-right1"
          onClick={() => changePrevious()}
        />
      </div>
    </div>
  );
}

export default Baner;
