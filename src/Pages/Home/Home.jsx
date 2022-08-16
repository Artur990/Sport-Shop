import React from "react";
import Button from "../../Components/button/button";
import { MdGppGood } from "react-icons/md";
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
              <div className="home-main__foot__icon-foods">
                <BsTelephoneInbound
                  className="home-main__foot__icon-food"
                  style={iconStyles}
                />
                <div>Telefon: 050-123-211</div>
              </div>
            </li>
            <li className="home-main__foot__column__lists">
              <div className="home-main__foot__icon-foods">
                <AiOutlineMail
                  className="home-main__foot__icon-food"
                  style={iconStyles}
                />
                <div>Email:lubimySport@adres.com</div>
              </div>
            </li>
            <li className="home-main__foot__column__lists">
              <div className="home-main__foot__icon-foods">
                <FaAddressCard
                  className="home-main__foot__icon-food"
                  style={iconStyles}
                />
                <div>Adres:Toruń ul. Osiedlowa 17</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="home-main__foot__column">
          <h2> Korzyści dla klubowiczów: </h2>
          <ul className="home-main__foot__column__list">
            <li className="home-main__foot__column__lists">
              <div className="home-main__foot__icon-foods">
                <MdGppGood
                  className="home-main__foot__icon-food"
                  style={iconStyles}
                />
                <div>10% zniżki na każde zakupy</div>
              </div>
            </li>
            <li className="home-main__foot__column__lists">
              <div className="home-main__foot__icon-foods">
                <MdGppGood
                  className="home-main__foot__icon-food"
                  style={iconStyles}
                />
                <div>zniżki świąteczne</div>
              </div>
            </li>
            <li className="home-main__foot__column__lists">
              <div className="home-main__foot__icon-foods">
                <MdGppGood
                  className="home-main__foot__icon-food"
                  style={iconStyles}
                />
                <div>-25% na zakupy w twoje urodziny ! </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="home-main__foot__column">
          <h2>dołącz do nas również na: </h2>
          <ul className="home-main__foot__column__list">
            <li className="home-main__foot__column__lists">
              <div className="home-main__foot__icon-foods">
                <BsFacebook
                  className="home-main__foot__icon-food"
                  style={iconStyles}
                />
                <div>FaceBook</div>
              </div>
            </li>
            <li className="home-main__foot__column__lists">
              <div className="home-main__foot__icon-foods">
                <BsInstagram
                  className="home-main__foot__icon-food"
                  style={iconStyles}
                />
                <div>Instagram</div>
              </div>
            </li>
            <li className="home-main__foot__column__lists">
              <div className="home-main__foot__icon-foods">
                <BsTwitter
                  className="home-main__foot__icon-food"
                  style={iconStyles}
                />
                <div>Twitter</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
