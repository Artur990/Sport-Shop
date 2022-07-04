import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./Form.css";
function Form() {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setformIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  useEffect(() => {
    if (enteredName) {
      setformIsValid(true);
    } else {
      setformIsValid(false);
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    if (enteredName.trim() === "") {
      setEnteredNameTouched(false);
    }
  };
  const handlerBlur = (e) => {
    setEnteredNameTouched(true);
    // if (enteredName.trim() !== "") {
    //   return setEnteredNameeIsValid(false);
    // }
  };
  // const handlerString = (e) => {
  //   setenteretLastName(e.target.value);

  // console.log(enteretLastName);
  // const enterenRefinput = nameInputRef.current.value;

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredName) {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "form-control-input invalid-input"
    : "form-control-input  ";
  return (
    <div className="form-main">
      <form className="form-controls" onSubmit={formSubmissionHandler}>
        <h2>Zaloguj się </h2>
        <div>
          <span className="form-control">
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
          </span>
        </div>
        <button className="btn">Zaloguj</button>
      </form>
    </div>
  );
}

export default Form;
