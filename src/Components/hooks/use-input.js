import React, { useState } from "react";

const useInput = (ValidateValue) => {
  const [enteredValue, setEnterdValue] = useState("");
  const [idTouched, setIsTouched] = useState(false);

  const valueIsValid = enteredValue.trim() !== "";
  const hasError = !valueIsValid && idTouched;

  const valueChangeHandler = (e) => {
    setEnterdValue(e.target.value);
  };

  const inputBlurhendler = () => {
    setIsTouched(true);
  };

  const rest = () => {
    setEnterdValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurhendler,
    rest,
  };
};

export default useInput;
