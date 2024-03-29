import React from "react";

import App from "./App";
import ReactDOM from "react-dom/client";
import Context from "./context/Context";

import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Context>
//       <App />
//     </Context>
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
