import axios from "axios";
import { Product } from "../types";

const JWT = process.env.NEXT_PUBLIC_JWT;

export default {
  getCatalog: () =>
    axios.get<Product[]>("https://coding-challenge-api.aerolab.co/products", {
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
    }),
};
