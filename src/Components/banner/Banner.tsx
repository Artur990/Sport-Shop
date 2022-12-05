import React, { FC, useState } from "react";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import "./Banner.scss";

type BanerProps = {
  photos: string[];
};

const Banner: FC<BanerProps> = ({ photos }) => {
  const [index, setIndex] = useState<number>(0);
  const changeNext = (): void => {
    if (index !== photos.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const changePrevious = (): void => {
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
