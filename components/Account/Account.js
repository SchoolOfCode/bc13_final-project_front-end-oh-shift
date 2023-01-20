import React from "react";
import Profile from "../Profile/Profile";
import Link from "next/link";

export default function Account() {
  return (
    <>
<div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
          <button className="btn btn-ghost btn-circle">
            <div className="avatar">
              <div className="w-8 mask mask-hexagon">
                <Profile />
              </div>
            </div>
          </button>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-30"
          >
            <li>
              <Link href="/api/auth/logout">Logout</Link>
            </li>
          </ul>
        </div>
    </>
  );
}


