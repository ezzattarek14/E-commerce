/* eslint-disable react/prop-types */

function NavbarLinks({ type }) {
  if (type === "col")
    return (
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
