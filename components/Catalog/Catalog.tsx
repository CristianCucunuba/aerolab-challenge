import { useQuery } from "react-query";
import ProductCard from "../ProductCard";
import api from "../../api";

function Catalog({ pagination = 0 }) {
  const { data: catalog, isLoading } = useQuery("products", () =>
    api.getCatalog()
  );

  if (isLoading) return null;

  return (
    <div className="grid grid-cols-4 gap-4">
      {(catalog?.data || [])
        .slice(pagination, pagination + 16)
        .map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  );
}

export default Catalog;
