/* eslint-disable react/prop-types */

function Button({ children, type, onClick, active }) {
  if (type === "black") {
    return (
      <button className="text-white bg-mblack whitespace-nowrap px-20 py-4 rounded-full md:w-1/2 w-full ">
        {children}
      </button>
    );
  }
  if (type === "white") {
    return (
      <button className="text-mblack bg-white whitespace-nowrap rounded-full font-semibold text-xl px-20 py-4 border border-gray-500 md:w-1/5 w-full">
        {children}
      </button>
    );
  }
  if (type === "Add") {
    return (
      <button className="text-white text-xs  sm:text-sm whitespace-nowrap md:text-lg bg-mblack px-10 md:px-20 py-3 rounded-full  w-2/3    ">
        {children}
      </button>
    );
  }
  if (type === "size") {
    return (
      <button
        onClick={onClick}
        className={`${
          active
            ? "bg-mblack text-white "
            : "text-mblack bg-[#F0F0F0] hover:text-white hover:bg-mblack"
        } transition duration-700 ease-in-out  rounded-full   p-2 md:px-6 md:py-3 text-sm whitespace-nowrap font-medium  leading-normal  capitalize w-full   `}
      >
        {children}
      </button>
    );
  }
  if (type === "prev/next") {
    return (
      <button
        onClick={onClick}
        className={
          "text-mblack border-2 border-gray-200 w-24 flex justify-around items-center rounded-lg font-bold  h-fill px-2 hover:text-white hover:bg-gray-700 hover:border-0 transition duration-100 ease-in-out"
        }
      >
        {children}
      </button>
    );
  }
  if (type === "pagintaion") {
    return (
      <button
        className={`${
          active
            ? "bg-gray-700 rounded-lg text-white p-2 w-10 text-center"
            : "bg-gray-100 rounded-lg text-black p-2 w-10 text-center hover:bg-gray-300"
        } transition duration-100 ease-in-out`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
