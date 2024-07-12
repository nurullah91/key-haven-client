import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../../assets/logo.svg";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-blue-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/about">About us</Link>
            </li>

            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="text-2xl font-bold flex items-center justify-center"
        >
          <img src={logo} className="size-14" alt="logo" />
          Key<span className="text-blue-500 font-extrabold">H</span>aven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/about">About us</Link>
          </li>

          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mr-4">
          <Link to="/cart" className="btn btn-ghost relative">
            <FaCartShopping className="text-xl text-blue-500" />
            <span className="badge absolute top-0 -right-1 bg-red-500 text-white">
              0
            </span>
          </Link>
        </div>
        <Link to="/dashboard" className="btn btn-sm myPrimaryBtn">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
