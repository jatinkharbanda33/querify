import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-[#2f53dc] p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            className="fill-current h-7 w-7 mr-2"
            width="64"
            height="64"
            src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/external-ninja-japan-tulpahn-outline-color-tulpahn.png"
            alt="external-ninja-japan-tulpahn-outline-color-tulpahn"
          />
          <NavLink to="/" className="font-semibold text-2xl tracking-tight">
            Querify
          </NavLink>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full hidden lg:flex flex-grow  lg:items-center  lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <NavLink
              to="/"
              className={({ isActive }) =>
    isActive ? "text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-white" : "text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
  }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
    isActive ? "text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-white" : "text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
  }
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
    isActive ? "text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-white" : "text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
  }
            >
              Blog
            </NavLink>
          </div>
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={changeTheme} />

              {/* sun icon */}
              <svg
                className={
                  theme === "light"
                    ? "swap-on fill-current w-10 h-10 stroke-current text-white"
                    : "swap-on fill-current w-10 h-10 stroke-current text-amber-300"
                }
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className={
                  theme === "dark"
                    ? "swap-off fill-current w-10 h-10 stroke-current text-gray-200"
                    : "swap-off fill-current w-10 h-10 stroke-current text-stone-400"
                }
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
