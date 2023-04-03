import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex m-0 w-full sticky top-0 z-30 bg-white text-red-900 h-20 shadow-lg">
        <div className="logo my-auto w-2/6 ml-10 font-bold text-4xl cursor-pointer">
          <h1 className="hover:text-yellow-400">Vibezter</h1>
        </div>
        <div className=" w-2/6 m-auto">
          <input
            className="border border-black w-full py-1 text-center rounded-lg"
            type="text"
          />
        </div>
        <div className=" w-2/6 m-auto ">
          <i className="fa-solid fa-cart-shopping text-black text-2xl ml-96"></i>
        </div>
      </nav>
    </>
  );
};

export default Header;
