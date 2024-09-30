/* eslint-disable react/prop-types */

function Button({ children, type }) {
  if (type === "black") {
    return (
      <button className="text-white bg-mblack px-20 py-4 rounded-full md:w-1/2 w-full ">
        {children}
      </button>
    );
  }
  if (type === "white") {
    return (
      <button className="text-mblack bg-white rounded-full font-semibold text-xl px-20 py-4 border border-gray-500 md:w-1/5 w-full">
        {children}
      </button>
    );
  }
}

export default Button;
