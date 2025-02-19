import { useState } from "react";
// import logo from "../assets/logo.png";
import { TfiAlignJustify } from "react-icons/tfi";
import SearchInput from "./SearchInput";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="h-auto">
    <header className="flex justify-between text-black py-6 px-8  bg-gradient-to-r from-sky-300 to-sky-100 drop-shadow-md ">
      <a href="#">
        {/* <img src={logo} alt="logo" className="w-52 hover:scale-105 " /> */}
        <span className="text-2xl font-semibold text-gray-800 font-sans">Flow Mart</span>
      </a>

      <ul className="hidden xl:flex items-center gap-3 font-semibold text-base justify-end ">
        <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
          Home
        </li>
        <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
          Products
        </li>
        <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
          Explore
        </li>
        <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
          Contact
        </li>
      </ul>
      <SearchInput/>
      <TfiAlignJustify className="xl:hidden text-3xl cursor-pointer " onClick={() => {
        setIsMenuOpen(!isMenuOpen);
      }}/>
      
    </header>
    {isMenuOpen && <div
        className={`relative xl:hidden  left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform`}
      >
        <ul className=" w-full justify-center items-center">
        <li className="p-3 hover:bg-sky-400 hover:text-white transition-all cursor-pointer w-full text-center text-gray-500">
          Home
        </li>
        <li className="p-3 hover:bg-sky-400 hover:text-white transition-all cursor-pointer text-center text-gray-500">
          Products
        </li>
        <li className="p-3 hover:bg-sky-400 hover:text-white transition-all cursor-pointer text-center text-gray-500">
          Explore
        </li>
        <li className="p-3 hover:bg-sky-400 hover:text-white transition-all cursor-pointer text-center text-gray-500">
          Contact
        </li>
        </ul>
      </div>}
    
    </div>
  );
}

export default NavBar;