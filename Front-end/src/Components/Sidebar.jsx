import NavbarLinks from "./NavbarLinks";

/* eslint-disable react/prop-types */

function Sidebar({ close }) {
  return (
    <div
      className={`top-0 right-0 w-[35vw] bg-mblack p-5 pr-16 text-white fixed h-full z-40  ease-in-out duration-300 ${
        close ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <div>
        <NavbarLinks type={"col"} />
      </div>
    </div>
  );
}

export default Sidebar;
