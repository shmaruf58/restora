import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";
import { Tooltip } from "@mui/material";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };

  return (
    <nav className="pb-2">
      <div className="navbar container mx-auto">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white font-semibold rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                {" "}
                Blog
              </NavLink>
            </ul>
          </div>

          <Link to="/">
            <a className=" normal-case text-4xl  font-semibold">Restora</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              {" "}
              <span className="ms-3">Blog</span>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <a className="btn btn-primary w-6 md:w-auto lg:uppercase lowercase">
              Log In
            </a>
          </Link>

          <Link to="/signup">
            <a className="btn btn-primary ms-3 w-6 md:w-auto lg:uppercase lowercase">
              Sign Up
            </a>
          </Link>

          {user && (
            <span className="white flex justify-center items-center ps-2">
              <Tooltip title={user.displayName ? user.displayName : user.email}>
                <img
                  className="w-12 h-12 me-2 rounded-full"
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://ionicframework.com/docs/img/demos/avatar.svg"
                  }
                />
              </Tooltip>

              <button
                className="btn btn-primary w-6 md:w-auto lg:uppercase lowercase"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
