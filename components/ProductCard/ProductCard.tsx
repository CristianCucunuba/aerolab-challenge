import Image from "next/image";
import { Product } from "../../types";

interface ProductProps {
  product: Product;
}

function ProductCard({ product }: ProductProps) {
  const { name, category, img, cost } = product;

  return (
    <div className="relative overflow-hidden rounded-sm group">
      <div className="p-5 bg-white shadow-md">
        <div className="relative w-full h-44">
          <Image src={img.hdUrl} layout="fill" />
        </div>
        <p className="mt-4 text-gray-400">{category}</p>
        <p className="text-lg">{name}</p>
      </div>
      <div className="absolute top-0 w-full h-full flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 group-hover:bg-[#16caf6] transition">
        <div className="flex mb-4">
          <span className="mr-2 text-3xl text-white">{cost}</span>
          <img src="coin.svg" alt="coin" />
        </div>
        <button className="px-4 py-2 text-gray-600 bg-white rounded-2xl">
          Redeem now
        </button>
      </div>
      <div className="absolute z-20 top-2 right-2 group-hover:hidden">
        <img src="/buy-blue.svg" alt="buy icon" />
      </div>
      <div className="absolute z-20 hidden top-1 right-1 group-hover:block">
        <img src="/buy-white.svg" alt="buy icon" />
      </div>
    </div>
  );
}

export default ProductCard;
