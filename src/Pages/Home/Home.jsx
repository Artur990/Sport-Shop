import React from "react";
import { GrStatusGood } from "react-icons/gr";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsTelephoneInbound,
} from "react-icons/bs";
import Button from "../../Components/button/button";

import { AiOutlineMail, AiFillStar } from "react-icons/ai";
import { FaAddressCard, FaThemeco } from "react-icons/fa";

import image1 from "../../assets/images/img1.jpg";
import image2 from "../../assets/images/img2.webp";
import image3 from "../../assets/images/img3.webp";
import image4 from "../../assets/images/img4.webp";
import Baner from "../../Components/baner/Baner";
import { Cont } from "../../context/ContextTwo";
import "./Home.scss";

import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const obj = [image1, image2, image3, image4];
  let iconStyles = { color: "green", fontSize: "1.5em" };

  const [sety, setSety] = useState(false);
  const setFalse = () => {
    setSety(false);
  };
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ee11faf41cmsh4e8a249abd4b37ap1c8561jsn247ed39cf3ad",
      "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
    },
  };

  const getDate = async () => {
    const date = await fetch(
      "https://sportscore1.p.rapidapi.com/sports",
      options
    );
    const jj = await date.json();
    console.log(jj);
  };

  useEffect(() => {
    getDate();
  }, []);
  return (
    <>
      <div className="baner-home">
        <Baner className="baner-home1" photos={obj} />
      </div>

      <div></div>
      <div className="home-main__foot">
        <div className="home-main__foot__column">
          <h2>Kontakt: </h2>
          <ul className="home-main__foot__column__list">
            <li className="home-main__foot__column__lists">
              <BsTelephoneInbound className="icon-food" style={iconStyles} />
              Telefon: 050-123-211
            </li>
            <li className="home-main__foot__column__lists">
              <AiOutlineMail className="icon-food" style={iconStyles} />
              Email:lubimySport@adres.com
            </li>
            <li className="home-main__foot__column__lists">
              <FaAddressCard className="icon-food" style={iconStyles} />
              Adres:Toruń ul. Osiedlowa 17
            </li>
          </ul>
        </div>
        <button ocClick={() => getDate()}></button>
        <div className="home-main__foot__column">
          <h2> Korzyści dla klubowiczów: </h2>
          <ul className="home-main__foot__column__list">
            <li className="home-main__foot__column__lists">
              <GrStatusGood className="icon-food" style={iconStyles} />
              10% zniżki na każde zakupy
            </li>
            <li className="home-main__foot__column__lists">
              {" "}
              <GrStatusGood className="icon-food" style={iconStyles} />
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
              <BsFacebook className="icon-food" />
              FaceBook
            </li>
            <li className="home-main__foot__column__lists">
              <BsInstagram className="icon-food" />
              Instagram
            </li>
            <li className="home-main__foot__column__lists">
              <BsTwitter className="icon-food" />
              Twitter
            </li>
            <li>
              <div>{sety && <div>siema</div>} </div>
              <Button class={"btn"} onClick={setSety} label={"BTN"} />
              <Button class={"btn1"} onClick={setFalse} label={"Btn1"} />
              <Button class={"btn2"} label={"Btn2"} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;

// const product = [...Array(20)].map(() => ({
//   id: Math.random(),
//   name1: faker.commerce.productName(),
//   image: faker.image.image(),
//   price: faker.commerce.price(),
//   // inStack: Math.random.arrayElement([0, 3, 5, 6, 7]),
//   fast: Boolean(Math.round(Math.random())),
//   ratings: [Math.floor(Math.random() * (5 - 1)) + 1],
// }));

// const product1 = [...Array(20)].map(() => ({
//   id: Math.random(),
//   name1: faker.commerce.productName(),
//   image: faker.image.image(),
//   price: faker.commerce.price(),
//   // inStack: Math.random.arrayElement([0, 3, 5, 6, 7]),
//   fast: Boolean(Math.round(Math.random())),
//   ratings: [Math.floor(Math.random() * (5 - 1)) + 1],
// }));

// const obj = [{ a: 2 }, { a: 2 }];
// const total = obj.reduce((prev, cur) => prev.a + cur.a);
// console.log(total);
// const [cart, setCart] = useState([]);

// const [products2] = useState(product1);
