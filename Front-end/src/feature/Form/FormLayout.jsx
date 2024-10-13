/* eslint-disable react/prop-types */

function Formlayout({ FormTitle, children }) {
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div className="w-full rounded-lg shadow-2xl shadow-black md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              {FormTitle}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formlayout;
