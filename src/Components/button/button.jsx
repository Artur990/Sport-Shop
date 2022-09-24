import React from "react";

import "./Button.scss";

const Button = (props) => {
  return (
    <>
      <button
        //   style={{ background: props.class }}
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
