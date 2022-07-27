import React, { useReducer, useState } from "react";

const useInput = (ValidateValue) => {
  const reducer = (state, action) => {
    if (action.type === "Value") {
      return {
        ...state,
        enteredValue: action.payload,
      };
    }
    if (action.type === "ISTOUCHED") {
      return {
        ...state,
        isTouched: action.payload,
      };
    }
    if (action.type === "RESET") {
      return {
        enteredValue: "",
        isTouched: false,
      };
    }
    return state;
  };

  const [state, dispatcher] = useReducer(reducer, {
    enteredValue: "",
    isTouched: false,
  });

  // const [enteredValue, setEnterdValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = state.enteredValue.trim() !== "";
  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = (e) => {
    dispatcher({ type: "Value", payload: e.target.value });
  };

  const inputBlurhendler = () => {
    dispatcher({ type: "ISTOUCHED", payload: true });
    // setIsTouched(true);
  };

  const rest = () => {
    dispatcher({ type: "RESET" });
  };
  return {
    value: state.enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurhendler,
    rest,
  };
};

export default useInput;
