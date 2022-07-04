import React from "react";
import "./PortalSilownia.css";
import ReactDOM from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";

export const Portal = ({
  open,
  isOpenRun,
  onClose,
  setIsOpen,
  setIsOpenRun,
  children,
}) => {
  if (!open) return null;
  const handlerChange = () => {
    return setIsOpen(false) && setIsOpenRun(false);
  };
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
