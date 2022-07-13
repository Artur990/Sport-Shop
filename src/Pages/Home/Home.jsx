import React from "react";
import { GrStatusGood } from "react-icons/gr";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsTelephoneInbound,
} from "react-icons/bs";

import { AiOutlineMail, AiFillStar } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";

import image1 from "../../assets/images/img1.jpg";
import image2 from "../../assets/images/img2.webp";
import image3 from "../../assets/images/img3.webp";
import image4 from "../../assets/images/img4.webp";
import Baner from "../../Components/baner/Baner";

import "./Home.css";

const Home = () => {
  const obj = [image1, image2, image3, image4];

  return (
    <>
      <Baner photos={obj} />
      <div className="main-foot">
        <div className="main-foot-list">
          <h2>Kontakt: </h2>
          <ul className="main-list">
            <li className="list-foot">
              <BsTelephoneInbound />
              Telefon: 050-123-211
            </li>
            <li className="list-foot">
              <AiOutlineMail />
              Email:lubimySport@adres.com
            </li>
            <li className="list-foot">
              <FaAddressCard />
              Adres:Toruń ul. Osiedlowa 17
            </li>
          </ul>
        </div>

        <div className="main-foot-list">
          <h2> Korzyści dla klubowiczów: </h2>
          <ul className="main-list">
            <li className="list-foot">
              <GrStatusGood />
              10% zniżki na każde zakupy
            </li>
            <li className="list-foot">
              {" "}
              <GrStatusGood />
              zniżki świąteczne{" "}
            </li>
            <li className="list-foot">
              <GrStatusGood style={{ color: "green" }} />
              -25% na zakupy w twoje urodziny !{" "}
            </li>
          </ul>
        </div>

        <div className="main-foot-list">
          <h2>dołącz do nas również na: </h2>
          <ul className="main-list">
            <li className="list-foot">
              <BsFacebook />
              FaceBook
            </li>
            <li className="list-foot">
              <BsInstagram />
              Instagram
            </li>
            <li className="list-foot">
              <BsTwitter />
              Twitter
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
