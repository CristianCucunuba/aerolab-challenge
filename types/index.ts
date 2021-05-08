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
