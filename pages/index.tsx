import { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Catalog from "../components/Catalog";
import Button from "../components/Button";

export default function Home() {
  const [pagination, setPagination] = useState(0);
  const isSecondPage = pagination >= 16;
  const itemsShowing = pagination + 16;

  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center pb-4 mt-12 mb-8 border-b border-gray-300">
          <span>{itemsShowing} of 32 products</span>
          <div className="h-10 mx-4 border-r border-gray-300"></div>
          <div className="flex items-center flex-grow">
            <span className="pr-3">Sort by:</span>
            <div className="space-x-3">
              <Button>Most Recent</Button>
              <Button>Lower Price</Button>
              <Button>Highest Price</Button>
            </div>
          </div>
          <button
            className="cursor-pointer focus:outline-none"
            onClick={() => {
              if (isSecondPage) {
                setPagination((pagination) => pagination - 16);
                return;
              }
              setPagination((pagination) => pagination + 16);
            }}>
            <img
              src={`/arrow-${isSecondPage ? "left" : "right"}.svg`}
              alt="back button"
            />
          </button>
        </div>
        <div className="mt-6 mb-10">
          <Catalog pagination={pagination} />
        </div>
        <p className="pb-6 mb-20 text-lg border-b border-gray-300">
          {itemsShowing} of 32 products
        </p>
      </div>
    </div>
  );
}
