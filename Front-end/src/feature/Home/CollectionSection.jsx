import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CollectionCard from "./CollectionCard";
import DivMotion from "../../ui/DivMotion";
import { islogged } from "../../services/Auth";

/* eslint-disable react/prop-types */

function CollectionSection({ data, title }) {
  const Coll_data = data;
  return (
    <DivMotion>
      <div className="container flex flex-col gap-10 justify-center items-center my-16 pb-20 border-b-2 border-gray-400">
        <h1 className="font-extrabold text-5xl uppercase mb-10">{title}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center">
          {Coll_data.map((item, index) => (
            <CollectionCard
              img={item.img}
              price={item.price}
              rating={item.rating}
              title={item.title}
              key={index}
            />
          ))}
        </div>
        <Button type={"white"}>
          {islogged() ? (
            <Link to={"/products"}> View All</Link>
          ) : (
            <Link to={"/signup"}> View All</Link>
          )}
        </Button>
      </div>
    </DivMotion>
  );
}

export default CollectionSection;
