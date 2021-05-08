import React from "react";
import Image from "next/image";
import { Product } from "../../types";

interface ProductProps {
  product: Product;
}

function ProductCard({ product }: ProductProps) {
  const { name, category, img } = product;

  return (
    <div className="relative p-5 bg-white shadow-md">
      <div className="relative w-full h-44">
        <Image src={img.hdUrl} layout="fill" />
      </div>
      <p className="mt-4 text-gray-400">{category}</p>
      <p className="text-lg">{name}</p>
      <div className="absolute top-2 right-2">
        <img src="/buy-blue.svg" alt="buy icon" />
      </div>
    </div>
  );
}

export default ProductCard;
