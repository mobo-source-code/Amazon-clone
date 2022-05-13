import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      <div className="flex items-center flex-grow p-1 py-2 bg-slate-900">
        <div className="flex items-center flex-grow mt-2 sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div className="items-center flex-grow hidden h-10 bg-yellow-400 cursor-pointer sm:flex rounded-md hover:bg-yellow-500">
          <input
            className="flex-grow flex-shrink w-6 h-full p-2 rounded-l-md focused:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div className="flex items-center mx-6 text-xs text-white cursor-pointer space-x-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Mohammed</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative flex items-center link">
            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-black bg-yellow-400 rounded-full md:right-10">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden mt-2 font-extrabold md:inline md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center h-10 text-sm font-bold text-white bg-slate-800 space-x-6">
        <p className="flex items-center flex-grow link">
          <MenuIcon className="h-6 mr-1" />
          <span>All</span>
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Electronics</p>
        <p className="link">Apparel</p>
        <p className="link">Books</p>
        <p className="link">Home & Furniture</p>
        <p className="link">Accessoires</p>
        <p className="link">Computers and Laptops</p>
        <p className="link">Beauty and Makeup</p>
        <p className="px-3 link">Jewelery</p>
      </div>
    </header>
  );
};

export default Header;
