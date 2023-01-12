import React from "react";
import Link from "next/link"

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Homepage</Link>
            </li>
            <li>
              <Link href="/Games">Games</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        {/* <button className="btn btn-ghost">
          <svg
            width="42"
            height="44"
            viewBox="0 0 42 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="21.2903"
              y="22"
              width="20.5806"
              height="22"
              fill="#50FFB1"
            />
            <rect width="21.2903" height="22" fill="#FF6201" />
            <rect x="21.2903" width="20.5806" height="22" fill="#4D4D4D" />
          </svg>
        </button> */}
        <Link href="/"
         className="btn btn-ghost normal-case text-xl">Oh Shift
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div>
          <button className="btn btn-ghost btn-circle">
            <div className="avatar">
              <div className="w-8 mask mask-hexagon">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
          </button>
          {/* <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
