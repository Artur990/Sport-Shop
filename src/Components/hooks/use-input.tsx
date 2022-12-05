import { useReducer } from "react";

const initialState = {
  enteredValue: "",
  isTouched: false,
};
type InitialStateType = typeof initialState;

export type ACTIONTYPE =
  | { type: "value"; payload: string }
  | { type: "isTouch"; payload: boolean }
  | { type: "reset" };

const reducer = (state: InitialStateType, action: ACTIONTYPE) => {
  switch (action.type) {
    case "value":
      return {
        ...state,
        enteredValue: action.payload,
      };
    case "isTouch":
      return {
        ...state,
        isTouched: action.payload,
      };
    case "reset":
      return {
        enteredValue: "",
        isTouched: false,
      };
    default:
      throw new Error("coś nie tak");
  }
};
const useInput = () => {
  const [state, dispatcher] = useReducer(reducer, initialState);

  const valueIsValid = state.enteredValue.trim() !== "";
  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatcher({ type: "value", payload: e.target.value });
  };

  const inputBlurhendler = () => {
    dispatcher({ type: "isTouch", payload: true });
  };

  const rest = () => {
    dispatcher({ type: "reset" });
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
