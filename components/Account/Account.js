import React from "react";
import Profile from "../Profile/Profile";

export default function Account() {
  return (
    <>
      <button className="btn btn-ghost btn-circle">
        <div className="avatar">
          <div className="w-8 mask mask-hexagon">
            <Profile />
          </div>
        </div>
      </button>

      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">Profile</a>
        </li>
        <li>
          <a href="/api/auth/logout">Logout</a>
        </li>
      </ul>
    </>
  );
}
