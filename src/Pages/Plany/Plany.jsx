import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Plan.css";

import { BiRun } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { TbHeartHandshake } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import Silownia from "./Silownia";

const Plany = () => {
  return (
    <div className="plany-heder">
      <div className="plany-heder-title">
        <h1>Dlaczego nasze Plany</h1>
        <h3>Sprawdź co zyskujesz !</h3>
      </div>

      <div className="plany-main">
        <div className="Planbiegania">
          <BiRun className="icon" /> Plan Biegania
        </div>

        <div className="PlanSilownia">
          <CgGym className="icon" />
          <Link to="/plantreningowy/silownia">Plan na Siłownie</Link>
        </div>

        <div className="PlanDietetycznu">
          {" "}
          <TbHeartHandshake className="icon" />
          Plan Dietetyczny
        </div>

        <div className="PlanJoga">
          {" "}
          <GrYoga className="icon" />
          Plan Joga
        </div>
      </div>
    </div>
  );
};

export default Plany;
