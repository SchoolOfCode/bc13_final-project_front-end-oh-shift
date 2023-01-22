import React, { useState, useEffect, useContext } from "react";
import Profile from "../Profile/Profile";
import Link from "next/link";
import { DarkModeWrapper } from "../../pages/_app";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Account() {
  let {darkMode,setDarkMode}= useContext(DarkModeWrapper);
  const { user } = useUser();

  return (
    <>
<div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
          <button className="btn btn-ghost btn-circle">
            <div className="avatar">
              <div className="w-8 mask mask-hexagon">
              <img src={user.picture} alt={user.name} />
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


