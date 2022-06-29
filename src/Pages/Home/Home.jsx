import React from "react";

import { CartState } from "../../context/Context";
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
        <div className="mian-foot1">
          <h1>Dziękujemu za odwiedziny naszej strony</h1>
        </div>
        <div className="mian-foot2">
          <h1>Korzyści dla klubowiczów: </h1>
          <h4> 10% zniżki na każde zakupy</h4>
          <h4> zniżki świąteczne </h4>
          <h4> -25% na zakupy w twoje urodziny ! </h4>
        </div>
        <div className="mian-foot3">
          <h2>dołącz do nas również na: </h2>
          <div>FACEBOOK</div>
          <div>Instagram</div>
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
