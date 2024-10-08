/* eslint-disable react/prop-types */

import { useSearchParams } from "react-router-dom";

function Pagination({ totalPost, postPage, setCurrentPage }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPage); i++) {
    pages.push(i);
  }

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(totalPost / postPage);

  function handlePrev() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
    setCurrentPage(prev);
  }
  function handleNext() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
    setCurrentPage(next);
  }
  return (
    <div className=" container flex gap-2 my-4">
      <button onClick={handlePrev}>prev</button>
      {pages.map((page, index) => {
        return (
          <button
            onClick={() => {
              searchParams.set("page", page);
              setSearchParams(searchParams);
              setCurrentPage(page);
            }}
            className="bg-black text-white p-2 w-5 text-center"
            key={index}
          >
            {page}
          </button>
        );
      })}
      <button onClick={handleNext}>next</button>
    </div>
  );
}

export default Pagination;

// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
// import { useSearchParams } from "react-router-dom";
// import { PAGE_SIZE } from "../utils/constance";

// function Pagination({ count }) {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const currentPage = !searchParams.get("page")
//     ? 1
//     : Number(searchParams.get("page"));
//   const pageCount = Math.ceil(count / PAGE_SIZE);

//   function nextPage() {
//     const next = currentPage === pageCount ? currentPage : currentPage + 1;
//     searchParams.set("page", next);
//     setSearchParams(searchParams);
//   }
//   function prevPage() {
//     const prev = currentPage === 1 ? currentPage : currentPage - 1;
//     searchParams.set("page", prev);
//     setSearchParams(searchParams);
//   }
//   return (
//     <div className="w-full flex items-center justify-between container">
//       <p className="text-lg ml-2">
//         Showing
//         <span className="font-semibold">
//           {(currentPage - 1) * PAGE_SIZE + 1}
//         </span>
//         to
//         <span className="font-semibold">
//           {" "}
//           {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
//         </span>
//         of <span className="font-semibold">{count}</span>
//       </p>

//       <div className="flex gap-2 items-center justify-center">
//         <button
//           onClick={prevPage}
//           className={`flex items-center justify-center gap-1.5 px-3 py-1.5 font-medium text-lg rounded-sm transition-colors duration-300 `}
//         >
//           <HiChevronLeft className="h-5 w-5" /> <span>Previous</span>
//         </button>
//         <button
//           onClick={nextPage}
//           className={`flex items-center justify-center gap-1.5 px-3 py-1.5 font-medium text-lg rounded-sm transition-colors duration-300 `}
//         >
//           <span>Next</span> <HiChevronRight className="h-5 w-5" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Pagination;
