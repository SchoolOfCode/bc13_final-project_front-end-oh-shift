import React from "react";
import Profile from "../Profile/Profile";

export default function Account() {
  return (
    <>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <button className="btn btn-ghost btn-circle">
            <div className="avatar">
              <div className="w-8 mask mask-hexagon">
                <Profile />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse-content">
          <a href="/api/auth/logout">Logout</a>
        </div>
      </div>
    </>
  );
}
