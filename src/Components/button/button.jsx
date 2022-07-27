import React from "react";
import "./button.scss";
const Button = (props) => {
  return (
    <>
      <label> {props.label}</label>
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
