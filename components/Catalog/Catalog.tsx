import { useQuery } from "react-query";
import ProductCard from "../ProductCard";
import api from "../../api";

function Catalog() {
  const { data: catalog, isLoading, isError, error } = useQuery(
    "products",
    () => api.getCatalog()
  );

  if (isLoading) return null;

  return (
    <div className="grid grid-cols-4 gap-4">
      {(catalog?.data || []).map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default Catalog;
