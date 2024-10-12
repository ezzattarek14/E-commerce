import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

import Logo from "../ui/Logo";
import NavbarLinks from "./NavbarLinks";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import { useCartStore } from "../Store";

function Navbar() {
  const [close, setClose] = useState(false);
  const cart = useCartStore((state) => state.cart);

  return (
    <>
      <header className="flex gap-5  justify-between container py-5 items-center mb-5 ">
        <div className="flex items-center gap-10">
          <div className="w-36 flex items-center gap-4  ">
            <div
              className="text-mblack text-3xl md:hidden"
              onClick={() => setClose(!close)}
            >
              <IoMenu />
            </div>
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="md:block hidden">
            <NavbarLinks />
          </div>
          <div className=" items-center gap-1 md:flex hidden">
            <span className="text-gray-600">
              <IoSearchOutline />
            </span>
            <input
              type="text"
              placeholder="Search for products..."
              className="px-5 lg:w-80 w-full py-2 rounded-full outline-none border border-gray-600 "
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="block text-2xl md:hidden">
            <IoSearchOutline />
          </div>
          <div className="text-2xl ">
            <Link to={"/cart"} className="relative">
              <span
                className={`${
                  cart.length === 0 ? "hidden" : "inline-block"
                } absolute top-3 whitespace-nowrap -mt-4 ms-2.5 rounded-full bg-danger px-[0.4em] py-[0.2em] text-[0.8rem] font-bold leading-none text-white bg-red-600 flex justify-center items-center`}
              >
                {cart.length}
              </span>

              <FiShoppingCart />
            </Link>
          </div>
          <div className="text-2xl ">
            <FaRegCircleUser />
          </div>
        </div>
      </header>
      <Sidebar close={close} />
    </>
  );
}

export default Navbar;
