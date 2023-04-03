import {
  TCartActions,
  TFootActions,
  TProductActions,
} from "../context/Reducer";
import { foods } from "../data/food";
import { products } from "../data/products";

export type TSingelProduct = {
  fast: boolean;
  id: number;
  image: string;
  isOpen: boolean;
  name1: string;
  price: number;
  ratings: number[];
};

export type TModal = {
  fast: boolean;
  id: number;
  image: string;
  isOpen: boolean;
  name1: string;
  price: number;
  ratings: number[];
  key: string;
};
export type TProductArray = {
  id: any;
  name1: string;
  image: string;
  price: number;
  fast: boolean;
  isOpen: boolean;
  ratings: number[];
  key: number;
};

export type TPropsContext = {
  children: JSX.Element;
};
export type TProductsType = typeof products;
export type TFoodsType = typeof foods;
export type TInterContex = {
  state: {
    products: TProductsType;
    cart: TProductsType;
    modal: TProductsType;
  };
  productState: {
    byfastDeliver: boolean;
    search: string;
    sort: string;
  };
  food: {
    foods: {
      type: string;
      foods: {
        id: number;
        isOpen: boolean;
        name: string;
        kcal: number;
      }[];
    };
  };
  dispatch: React.Dispatch<TCartActions>;
  productDispatch: React.Dispatch<TProductActions>;
  foodDispatche: React.Dispatch<TFootActions>;
};
