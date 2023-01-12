import React from "react";
import Link from "next/link"

function Header() {
  return (
    // <nav className="header">
    //   <Link href="/">
    //     {" "}
    //     <svg
    //       width="59"
    //       height="62"
    //       viewBox="0 0 59 62"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <rect x="30" y="31" width="29" height="31" fill="#50FFB1" />
    //       <rect width="30" height="31" fill="#FF6201" />
    //       <rect x="30" width="29" height="31" fill="#4C4C4C" />
    //     </svg>{" "}
    //     <h1 className="text-5xl font-bold underline" >AppName</h1>{" "}
    //   </Link>
    //   <Link href="">
    //     {" "}
    //     <svg
    //       width="28"
    //       height="31"
    //       viewBox="0 0 28 31"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <circle cx="14.3375" cy="7.3625" r="7.3625" fill="black" />
    //       <path
    //         fill-rule="evenodd"
    //         clip-rule="evenodd"
    //         d="M27.9 24.8C27.9 24.8 27.9 24.8 27.9 24.8V29.45C27.9 30.306 27.206 31 26.35 31H1.55C0.693956 31 0 30.306 0 29.45V24.8C0 24.8 0 24.8 0 24.8C1.14956e-05 23.7823 0.360838 22.7745 1.06188 21.8343C1.76293 20.894 2.79048 20.0396 4.08586 19.32C5.38124 18.6003 6.91907 18.0295 8.61156 17.64C10.3041 17.2505 12.1181 17.05 13.95 17.05C15.7819 17.05 17.5959 17.2505 19.2884 17.64C20.9809 18.0295 22.5188 18.6003 23.8141 19.32C25.1095 20.0396 26.1371 20.894 26.8381 21.8343C27.5392 22.7745 27.9 23.7823 27.9 24.8Z"
    //         fill="black"
    //       />
    //     </svg>
    //   </Link>
    //   <Link href="">
    //     {" "}
    //     <svg
    //       width="37"
    //       height="22"
    //       viewBox="0 0 37 22"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <line
    //         x1="36"
    //         y1="1"
    //         x2="1"
    //         y2="1"
    //         stroke="black"
    //         stroke-width="2"
    //         stroke-linecap="round"
    //       />
    //       <line
    //         x1="26"
    //         y1="11"
    //         x2="1"
    //         y2="11"
    //         stroke="black"
    //         stroke-width="2"
    //         stroke-linecap="round"
    //       />
    //       <line
    //         x1="16"
    //         y1="21"
    //         x2="1"
    //         y2="21"
    //         stroke="black"
    //         stroke-width="2"
    //         stroke-linecap="round"
    //       />
    //     </svg>{" "}
    //   </Link>
    // </nav>
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
              <a>Homepage</a>
            </li>
            <li>
              <a>Games</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Oh Shift</a>
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
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
