import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Catalog from "../components/Catalog";
import Button from "../components/Button";
import { useQuery } from "react-query";
import api from "../api";
import { Product } from "../types";
import {
  sortCatalogByHighestPrice,
  sortCatalogByLowerPrice,
} from "../utils/sortCatalog";

export default function Home() {
  const { data, isLoading } = useQuery("catalog", () => api.getCatalog());
  const [catalog, setCatalog] = useState<Product[]>([]);

  const [pagination, setPagination] = useState(0);
  const isSecondPage = pagination >= 16;
  const itemsShowing = `${pagination}-${pagination + 16} of 32 products`;

  useEffect(() => {
    if (data?.data && !isLoading) {
      setCatalog(data.data);
    }
  }, [data]);

  const handleSortByLowerPrice = () => {
    const sortedCatalog = [...catalog].sort(sortCatalogByLowerPrice);
    setCatalog(sortedCatalog);
  };

  const handleSortByHighestPrice = () => {
    const sortedCatalog = [...catalog].sort(sortCatalogByHighestPrice);
    setCatalog(sortedCatalog);
  };

  if (isLoading) return null;

  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center pb-4 mt-12 mb-8 border-b border-gray-300">
          <span>{itemsShowing}</span>
          <div className="h-10 mx-4 border-r border-gray-300"></div>
          <div className="flex items-center flex-grow">
            <span className="pr-3">Sort by:</span>
            <div className="space-x-3">
              <Button onClick={() => setCatalog(data?.data ?? [])}>
                Most Recent
              </Button>
              <Button onClick={handleSortByLowerPrice}>Lower Price</Button>
              <Button onClick={handleSortByHighestPrice}>Highest Price</Button>
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
          <Catalog pagination={pagination} catalog={catalog} />
        </div>
        <p className="pb-6 mb-20 text-lg border-b border-gray-300">
          {itemsShowing}
        </p>
      </div>
    </div>
  );
}
