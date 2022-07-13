import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Plan.css";

import { BiRun } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { TbHeartHandshake } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import Gym from "./Gym/Gym";
import Run from "./Run/Run";
import { Portal } from "./Modal/PortalSilownia";

const Plany = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRun, setIsOpenRun] = useState(false);

  return (
    <>
      <Portal open={isOpen} setIsOpen={setIsOpen}>
        <Gym />
      </Portal>

      {isOpenRun && <Run setIsOpenRun={setIsOpenRun} />}

      <div className="plan-heder">
        <div className="plan-heder-title">
          <h1>Dlaczego nasze Plany</h1>
          <h3>Sprawdź co zyskujesz !</h3>
        </div>

        <div className="plans-main">
          <div className="plan running" onClick={() => setIsOpenRun(true)}>
            <BiRun className="icon" />
            Plan Biegania
          </div>

          <div className="plan gym">
            <CgGym
              className="icon"
              // onClick={() => setIsOpen(true)}
            />
            <Link to="/plantreningowy/silownia">Plan siłowni</Link>
          </div>

          <div className="plan diet">
            <TbHeartHandshake className="icon" />
            <Link to="/plantreningowy/dieta">Plan Dietetyczny</Link>
          </div>

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
