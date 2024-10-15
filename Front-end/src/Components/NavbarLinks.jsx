/* eslint-disable react/prop-types */

function NavbarLinks({ type, setClose }) {
  if (type === "col")
    return (
      <div className="flex gap-16 items-start justify-between w-full">
        <ul className="flex-col space-y-3">
          <li className="hover:text-gray-400 duration-300 ease-in-out transition-all cursor-pointer">
            Shop
          </li>
          <li className="hover:text-gray-400 duration-300 ease-in-out transition-all cursor-pointer">
            On Sale
          </li>
          <li className="hover:text-gray-400 duration-300 ease-in-out transition-all cursor-pointer">
            New Arrivals
          </li>
          <li className="hover:text-gray-400 duration-300 ease-in-out transition-all cursor-pointer">
            Brands
          </li>
        </ul>
        <button
          onClick={() => setClose(false)}
          className="bg-white px-2 text-black rounded-3xl pb-1 cursor-pointer hover:bg-red-500 hover:text-white"
        >
          x
        </button>
      </div>
    );
  else {
    return (
      <ul className="flex gap-5">
        <li className="hover:text-gray-400 duration-300 ease-in-out transition-all cursor-pointer">
          Shop
        </li>
        <li className="hover:text-gray-400 duration-300 ease-in-out transition-all cursor-pointer">
          On Sale
        </li>
        <li className="hover:text-gray-400 duration-300 ease-in-out transition-all cursor-pointer">
          New Arrivals
        </li>
        <li className="hover:text-gray-400 duration-300 ease-in-out transition-all cursor-pointer">
          Brands
        </li>
      </ul>
    );
  }
}

export default NavbarLinks;
