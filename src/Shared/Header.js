import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'

const Header = () => {
  const menu = (
    <>
      <li className=" font-semibold text-xl">
        <Link to="/">Home</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-h-24 my-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div className="navbar-end">
        <button className="px-3 border border-orange-600 py-2 text-orange-600">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
