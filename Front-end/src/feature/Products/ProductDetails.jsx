/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import { useProduct } from "./useProduct";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
import StarRating from "../../ui/StarRating";
import { formatCurrency } from "../../utils/helper";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import img2 from "../../Assets/productimg2.png";
import img3 from "../../Assets/productimg3.png";
import img4 from "../../Assets/productimg4.png";
import SizeButtons from "../../Components/SizeButtons";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useCartStore } from "../../Store";
import toast from "react-hot-toast";

function ProductDetails() {
  const { id } = useParams();
  const { Product, isLoading } = useProduct();
  const [activeimg, setActiveImg] = useState(img4);
  const [active, setActive] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [count, setCount] = useState(1);
  console.log(size);

  const addToCart = useCartStore((state) => state.addToCart);
  function handleAddItem() {
    if (!size || !color) {
      toast.error("Please select a size and color.");
      return;
    }

    const newItem = {
      id: Product?.id,
      name: Product?.title,
      price: Product?.price,
      image: Product?.image,
      size,
      color,
      quantity: count,
    };

    addToCart(newItem);
    toast.success("Item added");
  }

  if (isLoading) return <Spinner />;
  return (
    <div className="container space-y-10 ">
      <div className="md:px-5 px-0">
        <ul className="flex  gap-2">
          <li>{`Home >`}</li>
          <li>{`Shop >`}</li>
          <li>{`Men >`}</li>
          <li>T-Shirt</li>
        </ul>
      </div>
      <div className="flex-col flex gap-3  justify-center md:grid md:grid-cols-6 md:gap-3 md:justify-start ">
        <div className="md:col-span-1 md:flex  md:items-center  ">
          <div className="flex-col hidden md:flex gap-3 items-center  ">
            <img
              src={img4}
              alt={`img 1 for product id ${id}`}
              className={`cursor-pointer w-1/2  rounded-lg  ${
                active === 1 ? "border border-black" : ""
              }`}
              onClick={() => {
                setActiveImg(img4);
                setActive(1);
              }}
            />
            <img
              src={img2}
              alt={`img 1 for product id ${id}`}
              className={`cursor-pointer w-1/2 rounded-lg ${
                active === 2 ? "border border-black" : ""
              }`}
              onClick={() => {
                setActiveImg(img2);
                setActive(2);
              }}
            />
            <img
              src={img3}
              alt={`img 1 for product id ${id}`}
              className={`cursor-pointer w-1/2 rounded-lg object-cover ${
                active === 3 ? "border border-black" : ""
              }`}
              onClick={() => {
                setActiveImg(img3);
                setActive(3);
              }}
            />
          </div>
        </div>
        <div className="col-span-2 rounded-xl w-full hidden  md:flex justify-center items-center  ">
          <img
            src={activeimg}
            alt={`img 1 for product id ${id}`}
            className={`w-2/3 rounded-xl`}
          />
        </div>
        {/* responsive images */}
        <div className="flex justify-start items-start md:hidden">
          <img
            src={activeimg}
            alt={`img 1 for product id ${id}`}
            className={`w-1/2 rounded-xl md:hidden block`}
          />
        </div>
        <div className="md:hidden flex  gap-3 w-60">
          <img
            src={img4}
            alt={`img 1 for product id ${id}`}
            className={`cursor-pointer w-1/3  rounded-lg  ${
              active === 1 ? "border border-black" : ""
            }`}
            onClick={() => {
              setActiveImg(img4);
              setActive(1);
            }}
          />
          <img
            src={img2}
            alt={`img 1 for product id ${id}`}
            className={`cursor-pointer w-1/3 rounded-lg ${
              active === 2 ? "border border-black" : ""
            }`}
            onClick={() => {
              setActiveImg(img2);
              setActive(2);
            }}
          />
          <img
            src={img3}
            alt={`img 1 for product id ${id}`}
            className={`cursor-pointer w-1/3 rounded-lg object-cover ${
              active === 3 ? "border border-black" : ""
            }`}
            onClick={() => {
              setActiveImg(img3);
              setActive(3);
            }}
          />
        </div>
        <div className="md:col-span-3 space-y-2 md:space-y-6">
          <div className="space-y-3 border-b border-gray-300 pb-3 md:pb-6">
            <h1 className="font-extrabold text-2xl md:text-4xl ">
              One Life Graphic T-shirt
            </h1>
            <StarRating maxrating={5} size={24} defaultRating={4} text={true} />
            <div className="font-bold text-2xl">{formatCurrency(200)}</div>
            <p className="text-xs md:text-sm w-2/3 text-gray-500">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
          </div>
          <div className="pb-6 pt-3 border-b border-gray-300 space-y-3">
            <span className="text-sm text-gray-500">Select Colors</span>
            <div className="flex gap-3">
              <div
                className="bg-[#4F4631] rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setColor("Brown")}
              >
                <IoMdCheckmark
                  className={`text-white text-xl ${
                    color === "Brown" ? "block" : "hidden"
                  }`}
                />
              </div>
              <div
                onClick={() => setColor("Green")}
                className="bg-[#314F4A] rounded-full w-8 h-8 flex items-center justify-center"
              >
                <IoMdCheckmark
                  className={`text-white text-xl ${
                    color === "Green" ? "block" : "hidden"
                  }`}
                />
              </div>
              <div
                onClick={() => setColor("Purple")}
                className="bg-[#31344F] rounded-full w-8 h-8 flex items-center justify-center"
              >
                <IoMdCheckmark
                  className={`text-white text-xl ${
                    color === "Purple" ? "block" : "hidden"
                  }`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="pb-3 md:pb-6 pt-3 border-b border-gray-300 space-y-3">
              <span className="text-sm  text-gray-500">Choose Size</span>
              <SizeButtons size={size} setSize={setSize} />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-1/3 md:w-40  py-2 gap-5 rounded-full px-3 bg-[#d4ccccd2] flex  justify-center items-center">
              <FaMinus
                className=" cursor-pointer w-full"
                onClick={() => {
                  if (count === 1) return;
                  setCount(count - 1);
                }}
              />
              <span className="font-semibold w-1">{count}</span>
              <FaPlus
                className=" cursor-pointer w-full"
                onClick={() => {
                  setCount(count + 1);
                }}
              />
            </div>
            <Button type={"Add"} onClick={handleAddItem}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
