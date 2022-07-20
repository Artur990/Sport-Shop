import React, { useState } from "react";
import { useEffect } from "react";
import useInput from "../../Components/hooks/use-input";
import "./Form.scss";
function Form() {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasErroe,
    valueChangeHandler: nameChangeHandler,
    inputBlurhendler: nameBlurHandler,
    rest: restNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: LastNameInputHasErroe,
    valueChangeHandler: LastNameChangeHandler,
    inputBlurhendler: LastNameBlurHandler,
    rest: restLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasErroe,
    valueChangeHandler: emailChangeHandler,
    inputBlurhendler: emailBlurHandler,
    rest: restEmailInput,
  } = useInput((value) => value.trim().includes("@"));
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasErroe,
    valueChangeHandler: passwordChangeHandler,
    inputBlurhendler: passwordBlurHandler,
    rest: restpasswordInput,
  } = useInput((value) => value.trim().includes("@"));

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }

  const submithandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(
      enteredName,
      enteredLastName,
      enteredEmail,
      enteredPasswordIsValid
    );
    restNameInput();
    restLastNameInput();
    restEmailInput();
    restpasswordInput();
  };

  const nameInputClases = !nameInputHasErroe
    ? "form-main__control"
    : "form-main__control inValid ";
  const LastNameInputClases = !LastNameInputHasErroe
    ? "form-main__control"
    : "form-main__control inValid ";

  const emailInputClases = !emailInputHasErroe
    ? "form-main__control"
    : "form-main__control inValid ";
  const passwordInputClasses = !passwordInputHasErroe
    ? "form-main__control"
    : "form-main__control inValid ";
  return (
    <div className="form-main">
      <h2>Zaloguj się </h2>
      <form className="form-main__controls" onSubmit={submithandler}>
        <div className={nameInputClases}>
          <label>Imię:</label>
          <input
            type="text"
            placeholder="Wpisz imię"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          ></input>
          {nameInputHasErroe && <h5>wpisz conajemniej 3 znaki</h5>}
        </div>
        <div className={LastNameInputClases}>
          <label>Nazwisko:</label>
          <input
            type="text"
            placeholder="Wpisz nazwisko"
            value={enteredLastName}
            onChange={LastNameChangeHandler}
            onBlur={LastNameBlurHandler}
          ></input>
          {LastNameInputHasErroe && <h5>wpisz conajemniej 3 znaki</h5>}
        </div>
        <div className={emailInputClases}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Wpisz email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          ></input>
          {emailInputHasErroe && <h5>wpisz conajemniej 3 znaki</h5>}
        </div>

        <div className={passwordInputClasses}>
          <label>Hasło:</label>
          <input
            type="password"
            placeholder="Wpisz hasło"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          ></input>
          {passwordInputHasErroe && <h5>wpisz conajemniej 3 znaki</h5>}
        </div>

        <button className="form-main__btn" disabled={!formIsValid}>
          Zaloguj
        </button>
      </form>
    </div>
  );
}

export default Form;

// const nameInputRef = useRef();
//   const [enteredName, setEnteredName] = useState("");
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false);
//   const [formIsValid, setformIsValid] = useState(false);

//   const enteredNameIsValid = enteredName.trim() !== "";
//   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
//   useEffect(() => {
//     if (enteredName) {
//       setformIsValid(true);
//     } else {
//       setformIsValid(false);
//     }
//   }, [enteredNameIsValid]);

//   const nameInputChangeHandler = (e) => {
//     setEnteredName(e.target.value);
//     if (enteredName.trim() === "") {
//       setEnteredNameTouched(false);
//     }
//   };
//   const handlerBlur = (e) => {
//     setEnteredNameTouched(true);
//     // if (enteredName.trim() !== "") {
//     //   return setEnteredNameeIsValid(false);
//     // }
//   };
//   // const handlerString = (e) => {
//   //   setenteretLastName(e.target.value);

//   // console.log(enteretLastName);
//   // const enterenRefinput = nameInputRef.current.value;

//   const formSubmissionHandler = (e) => {
//     e.preventDefault();

//     setEnteredNameTouched(true);

//     if (!enteredName) {
//       return;
//     }
//     console.log(enteredName);
//     setEnteredName("");
//     setEnteredNameTouched(false);
//   };

//   const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
//   const nameInputClasses = nameInputIsInvalid
//     ? "form-control-input invalid-input"
//     : "form-control-input  ";

{
  /* <span className="form-control">
            <label>Imię:</label>
            <input
              ref={nameInputRef}
              className={nameInputClasses}
              type="text"
              onChange={nameInputChangeHandler}
              onBlur={handlerBlur}
              value={enteredName}
              placeholder="Wpisz imię"
            ></input>
            {nameInputIsValid && <div style={{ color: "red" }}>wpisz dane</div>}
          </span>
          <span className="form-control">
          <label>Nazwisko</label>
          <input
            className={nameInputClasses}
            onChange={nameInputChangeHandler}
            type="text"
            placeholder="Wpisz nazwisko"
            // onChange={handlerNumber}
          ></input>
          {nameInputIsValid && <div style={{ color: "red" }}>wpisz dane</div>}
        </span>
        <span className="form-control">
          <label>Email</label>
          <input
            className={nameInputClasses}
            onChange={nameInputChangeHandler}
            type="email"
            placeholder="Wpisz email"
            // onChange={handlerNumber}
          ></input>
          {nameInputIsValid && <div style={{ color: "red" }}>wpisz dane</div>}
        </span>
        <span className="form-control">
          <label>Hasło</label>
          <input
            className={nameInputClasses}
            onChange={nameInputChangeHandler}
            type="password"
            // onChange={handlerNumber}
            placeholder="Wpisz hasło"
          ></input>
          {nameInputIsValid && <div style={{ color: "red" }}>wpisz dane</div>}
        </span>
        <span className="form-control">
          <label>Ponów hasło</label>
          <input
            className={nameInputClasses}
            onChange={nameInputChangeHandler}
            type="password"
            // onChange={handlerNumber}
            placeholder="Wpisz hasło"
          ></input>
          {nameInputIsValid && <div style={{ color: "red" }}>wpisz dane</div>}
        </span> */
}
