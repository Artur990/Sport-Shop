import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Plan.css";

import { BiRun } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { TbHeartHandshake } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import Gym from "./Gym/Gym";
import Run from "./Run/Run";
// import { Portal } from "./Modal/PortalSilownia";

const Plany = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRun, setIsOpenRun] = useState(false);

  return (
    <>
      {/* <Portal open={isOpen} setIsOpen={setIsOpen}>
        <Gym />
      </Portal> */}

      {isOpenRun && <Run setIsOpenRun={setIsOpenRun} />}

      <div className="plan-heder">
        <div className="plan-heder-title">
          <h1>Dlaczego nasze Plany</h1>
          <h3>Sprawdź co zyskujesz !</h3>
        </div>

        <div className="plans-main" onClick={() => setIsOpenRun(true)}>
          <div className="plan running">
            <BiRun className="icon" />
            Plan Biegania
          </div>

          <Link to="/plantreningowy/silownia" className="plan gym">
            <CgGym className="icon" />
            Plan Siłowni
          </Link>

          <Link to="/plantreningowy/dieta" className="plan diet">
            <TbHeartHandshake className="icon" />
            Plan Dietetyczny
            {/* <Link to="/plantreningowy/dieta">Plan Dietetyczny</Link> */}
          </Link>

          <div className="plan joga">
            {" "}
            <GrYoga className="icon" />
            Plan Joga
          </div>
        </div>
      </div>
    </>
  );
};

export default Plany;
