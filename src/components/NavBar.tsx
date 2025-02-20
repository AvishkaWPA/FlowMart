import { useState } from "react";
// import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.png";
import Hamburger from 'hamburger-react'


function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="h-auto">
    <header className="flex justify-between text-black py-6   bg-gradient-to-r from-sky-300 to-sky-100 drop-shadow-md items-center pr-5">
      <a href="/home" className="flex flex-row items-center  ">
        <img src={logo} alt="logo" className=" hover:scale-105 w-2/12" /> 
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
      {/* <TfiAlignJustify className="xl:hidden text-3xl cursor-pointer " onClick={() => {
        setIsMenuOpen(!isMenuOpen);
      }}/> */}
      <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
      
    </header>
    {isMenuOpen && <div
        className={`relative xl:hidden  left-0 w-full  flex flex-col items-center gap-6 font-semibold text-lg transform `}
      >
        <ul className=" w-full justify-center items-center">
        <li className="p-3 hover:bg-sky-400 hover:text-white transition-all cursor-pointer w-full text-center text-gray-500 border border-gray-300">
          Home
        </li>
        <li className="p-3 hover:bg-sky-400 hover:text-white transition-all cursor-pointer text-center text-gray-500  border-gray-300">
          Products
        </li>
        <li className="p-3 hover:bg-sky-400 hover:text-white transition-all cursor-pointer text-center text-gray-500  border-gray-300">
          Explore
        </li>
        <li className="p-3 hover:bg-sky-400 hover:text-white transition-all cursor-pointer text-center text-gray-500  border-gray-300">
          Contact
        </li>
        </ul>
      </div>}
    
    </div>
  );
}

export default NavBar;