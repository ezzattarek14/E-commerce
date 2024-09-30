import Button from "../../ui/Button";
import CollectionCard from "./CollectionCard";

/* eslint-disable react/prop-types */

function CollectionSection({ data, title }) {
  const Coll_data = data;
  return (
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
      <Button type={"white"}>View All</Button>
    </div>
  );
}

export default CollectionSection;
