export type Product = {
  _id: number;
  category: string;
  cost: number;
  img: {
    url: string;
    hdUrl: string;
  };
  name: string;
};

export type User = {
  id: string;
  name: string;
  points: number;
  redeemHistory: {
    _id: string;
    productId: string;
    createDate: Date;
  }[];
  createDate: Date;
};
