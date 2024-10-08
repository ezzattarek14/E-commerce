import { Link } from "react-router-dom";
import { useProducts } from "../feature/Products/useProducts";
import Spinner from "../ui/Spinner";
import Pagination from "../ui/Pagination";
import { useState } from "react";
import { PAGE_SIZE } from "../utils/constance";

function Products() {
  const { Products, isLoading } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * PAGE_SIZE;
  const firstIndex = lastIndex - PAGE_SIZE;
  const currentPost = Products?.slice(firstIndex, lastIndex);
  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="grid grid-cols-4 container justify-center">
        {currentPost.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}>
            {item.id}
          </Link>
        ))}
      </div>
      <Pagination
        totalPost={Products.length}
        postPage={PAGE_SIZE}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default Products;
