import React from "react";
import Button from "../../Components/button/button";
import { GrStatusGood } from "react-icons/gr";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsTelephoneInbound,
} from "react-icons/bs";
import { AiOutlineMail, AiFillStar } from "react-icons/ai";
import { FaAddressCard, FaThemeco } from "react-icons/fa";

import image1 from "../../assets/images/img1.jpg";
import image2 from "../../assets/images/img2.jpg";
import image3 from "../../assets/images/img3.webp";
import image4 from "../../assets/images/img4.jpg";
import Baner from "../../Components/baner/Baner";

import "./Home.scss";

const Home = () => {
  const obj = [image4, image2, image3, image1];
  let iconStyles = { color: "green", fontSize: "1.5em" };

  return (
    <>
      <div className="baner-home">
        <Baner
          //  className="baner-home1"
          photos={obj}
        />
      </div>
      <div className="home-main__foot">
        <div className="home-main__foot__column">
          <h2>Kontakt: </h2>
          <ul className="home-main__foot__column__list">
            <li className="home-main__foot__column__lists">
              <BsTelephoneInbound
                className="home-main__icon-food"
                style={iconStyles}
              />
              Telefon: 050-123-211
            </li>
            <li className="home-main__foot__column__lists">
              <AiOutlineMail
                className="home-main__icon-food"
                style={iconStyles}
              />
              Email:lubimySport@adres.com
            </li>
            <li className="home-main__foot__column__lists">
              <FaAddressCard
                className="home-main__icon-food"
                style={iconStyles}
              />
              Adres:Toruń ul. Osiedlowa 17
            </li>
          </ul>
        </div>
        <div className="home-main__foot__column">
          <h2> Korzyści dla klubowiczów: </h2>
          <ul className="home-main__foot__column__list">
            <li className="home-main__foot__column__lists">
              <GrStatusGood
                className="home-main__icon-food"
                style={iconStyles}
              />
              10% zniżki na każde zakupy
            </li>
            <li className="home-main__foot__column__lists">
              {" "}
              <GrStatusGood
                className="home-main__icon-food"
                style={iconStyles}
              />
              zniżki świąteczne{" "}
            </li>
            <li className="home-main__foot__column__lists">
              <GrStatusGood style={iconStyles} />
              -25% na zakupy w twoje urodziny !{" "}
            </li>
          </ul>
        </div>

        <div className="home-main__foot__column">
          <h2>dołącz do nas również na: </h2>
          <ul className="home-main__foot__column__list">
            <li className="home-main__foot__column__lists">
              <BsFacebook className="home-main__icon-food" />
              FaceBook
            </li>
            <li className="home-main__foot__column__lists">
              <BsInstagram className="home-main__icon-food" />
              Instagram
            </li>
            <li className="home-main__foot__column__lists">
              <BsTwitter className="home-main__icon-food" />
              Twitter
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
