import { faker } from "@faker-js/faker";
export const products = [...Array(20)].map(() => ({
  id: Math.random(),
  name1: faker.commerce.productName(),
  image: faker.image.image(),
  price: Number(faker.commerce.price()),
  fast: Boolean(Math.round(Math.random())),
  isOpen: false,
  ratings: [Math.floor(Math.random() * (5 - 1)) + 1],
}));
