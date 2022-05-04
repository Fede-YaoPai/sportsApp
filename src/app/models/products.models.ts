export interface InputProp {
  propOne: string,
  propTwo: string
};

export enum ProductCategory {
  Boxe,
  Kickboxing,
  MMA
};

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  madeOn: Date;
  madeIn: string;
  onPromotion: boolean;
  description: string;
};
