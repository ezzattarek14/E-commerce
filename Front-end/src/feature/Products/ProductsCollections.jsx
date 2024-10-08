/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function ProductsCollection({ products }) {
  return (
    <div className="grid grid-cols-2 gap-5 py-10 container justify-around border-b-2 border-black md:grid-cols-4">
      {products.map((item) => (
        <Link to={`/product/${item.id}`} key={item.id}>
          <div className="bg-gray-100 h-80 rounded-3xl max-w-72 mt-5">
            <ProductCard
              id={item.id}
              img={item.image}
              price={item.price}
              title={item.title}
              rating={item.rating.rate}
            ></ProductCard>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductsCollection;
