import React, { createContext, Children, useState, useContext } from "react";
export const Countee = createContext();

function ContextTwo({ children }) {
  const [state, setState] = useState([69]);

  console.log(state);
  return <Countee.Provider value={{ state }}>{children}</Countee.Provider>;
}
export const Cont = () => {
  return useContext(Countee);
};
export default ContextTwo;
