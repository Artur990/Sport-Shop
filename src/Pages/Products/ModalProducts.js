import React from "react";

import ReactDOM from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import "./ModalProducts";

export const ModalProducts = ({ isOpen, setIsOpen, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      {/* style={OVERLAY_STYLE} */}
      <div className="portal-main" onClick={() => setIsOpen(false)} />
      <div className="portal">
        <AiFillCloseCircle onClick={() => setIsOpen(false)} />

        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};
