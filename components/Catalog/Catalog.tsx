import { useQuery } from "react-query";
import ProductCard from "../ProductCard";
import api from "../../api";
import {
  sortCatalogByHighestPrice,
  sortCatalogByLowerPrice,
} from "../../utils/sortCatalog";
import { Product } from "../../types";

interface CatalogProps {
  pagination: number;
  catalog: Product[];
}

function Catalog({ pagination = 0, catalog = [] }: CatalogProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {catalog.slice(pagination, pagination + 16).map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default Catalog;
