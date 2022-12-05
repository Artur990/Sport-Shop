import React, { FC, ReactNode } from "react";

import "./Button.scss";

type ButtonProps = {
  class: string;
  onClick: () => void;
  style?: any;
  children: ReactNode;
};
const Button: FC<ButtonProps> = (props) => {
  return (
    <>
      <button
        className={props.class}
        onClick={props.onClick}
        style={props.style}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
