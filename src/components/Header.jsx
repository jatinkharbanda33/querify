import React, { useEffect, useState } from "react";
import { NavLink,Link } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-[#2f53dc] p-4 mt-0 dark:bg-slate-700">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            className="fill-current h-7 w-7 mr-2"
            width="64"
            height="64"
            src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/external-ninja-japan-tulpahn-outline-color-tulpahn.png"
            alt="external-ninja-japan-tulpahn-outline-color-tulpahn"
          />
          <Link to="/" className="font-semibold text-2xl tracking-tight" >
            Querify
          </Link>
        </div>
        
        {/* Hamburger menu for small screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm flex-grow">
            <NavLink
              to="/"
              onClick={()=>{setMenuOpen(false)}}
              className={({ isActive }) =>
                isActive
                  ? "text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-white"
                  : "text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={()=>{setMenuOpen(false)}}
              className={({ isActive }) =>
                isActive
                  ? "text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-white"
                  : "text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              onClick={()=>{setMenuOpen(false)}}
              className={({ isActive }) =>
                isActive
                  ? "text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-white"
                  : "text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              }
            >
              Blog
            </NavLink>
          </div>
          <div className="mt-4 lg:mt-0">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === "dark"}
                onChange={changeTheme}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-white">
                Dark mode
              </span>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
