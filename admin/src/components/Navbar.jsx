import React from "react";
import {assets} from '../assets/assets.js'
const Navbar = () => {
  return(
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(4%,10px)]" src={assets.logo} alt="" />
      <button className="bg-black text-white px-2 py-2 sm:px-5 sm:py-2 rounded-full text-lg sm:text-sm">Logout</button>
    </div>
  )
}

export default Navbar