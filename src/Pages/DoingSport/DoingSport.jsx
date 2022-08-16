import React from "react";
import "./DoingSport.scss";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/toCalculate.jpg";
import img2 from "../../assets/images/tGym.jpg";
import img3 from "../../assets/images/toRun.jpg";
const DlaczegoWartoUprawiacSport = () => {
  return (
    <>
      <span className="sport-calculate">
        <span className="sport-calculate__photo">
          <img className="sport-calculate__photo-1" src={img1} alt="img1" />
        </span>
        <div className="sport-calculate__description">
          <h1>Kalkulator Kalori</h1>
          <p>
            Dzięki naszemu Kalkulatorowi sprawdzisz ile kalori zjadasz każdego
            dnia !
          </p>
          <p>
            Odpwiedż nasz kalkulator, przelicz kalorie i osiągnij swoją
            sylwetkę!
          </p>
          <Link to="/plantreningowy/dieta" className="sport-calculate__link">
            Kalkulator kalori
            <Link to="/plantreningowy/dieta" />
          </Link>
        </div>
      </span>
      <span className="sport-calculate">
        <div className="sport-calculate__description">
          <h1>Plan treningowy siłowni </h1>
          <p>Sprawdź nasze plany treningowe dla Początkujących</p>
          <p>
            Naszę plany są układane przez specjalistów sprawdź a zobaczysz
            piwersze efekty już w pierwszym miesiącu!
          </p>
          <Link to="/plantreningowy/silownia" className="sport-calculate__link">
            Plan na siłownie
          </Link>
        </div>
        <span className="sport-calculate__photo">
          <img className="sport-calculate__photo-2" src={img2} alt="img2" />
        </span>
      </span>
      <span className="sport-calculate">
        <span className="sport-calculate__photo">
          <img className="sport-calculate__photo-3" src={img3} alt="img1" />
        </span>
        <div className="sport-calculate__description">
          <h1>Plan biegania</h1>
          <p> Zacznij biegać z naszym planym treningowym</p>
          <p>
            Nasz plan treningwy przetestowało setki osób, sprawdź i się
            przekonaj
          </p>
          <Link to="/plantreningowy/bieganie" className="sport-calculate__link">
            Plan biegania
            <Link to="/plantreningowy/dieta" />
          </Link>
        </div>
      </span>
    </>
  );
};

export default DlaczegoWartoUprawiacSport;
