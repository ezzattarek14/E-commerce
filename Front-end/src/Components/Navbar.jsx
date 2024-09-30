import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

import Logo from "../ui/Logo";
import NavbarLinks from "./NavbarLinks";
import Sidebar from "../Components/Sidebar";

function Navbar() {
  const [close, setClose] = useState(false);
  return (
    <>
      <header className="flex gap-5  justify-between container py-5 items-center mb-5 ">
        <div className="flex items-center gap-10">
          <div className="w-36 flex items-center gap-4  ">
            <div
              className="text-mblack md:hidden"
              onClick={() => setClose(!close)}
            >
              <IoMenu />
            </div>
            <Logo />
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
          <div className="block md:hidden">
            <IoSearchOutline />
          </div>
          <div>
            <FiShoppingCart />
          </div>
          <div>
            <FaRegCircleUser />
          </div>
        </div>
      </header>
      <Sidebar close={close} />
    </>
  );
}

export default Navbar;
