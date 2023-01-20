import React from "react";
import Link from "next/link";

export default function NoAccount() {
  return (
    <>
<div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
          <button className="btn btn-ghost btn-circle">
            <div className="avatar">
              <div className="w-8 mask mask-hexagon">
              <img src="https://i.ibb.co/4S5QRSK/oh-shift-account-smaller.png" />
              </div>
            </div>
          </button>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-30"
          >
            <li>
              <Link href="/api/auth/login">Login</Link>
            </li>
          </ul>
        </div>
    </>
  );
}