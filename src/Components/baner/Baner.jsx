import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import "./Baner.scss";

function Baner({ photos }) {
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
      <div className="baner__arrow-left">
        <BsFillArrowLeftCircleFill
          className="baner__arrow-left1"
          onClick={() => changeNext()}
        />
      </div>

      <img className="baner__img" src={photos[index]} alt="22" />
      <div className="baner__arrow-right">
        <BsFillArrowRightCircleFill
          className="baner__arrow-right1"
          onClick={() => changePrevious()}
        />
      </div>
    </div>
  );
}

export default Baner;
