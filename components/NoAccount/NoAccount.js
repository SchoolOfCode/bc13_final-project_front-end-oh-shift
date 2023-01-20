import React from "react";

export default function NoAccount() {
  return (
    <button className="btn btn-ghost btn-circle">
      <div className="avatar">
        <div className="w-8 mask mask-hexagon">
          <a href="/api/auth/login">
            <img src="https://i.ibb.co/4S5QRSK/oh-shift-account-smaller.png" />
          </a>
        </div>
      </div>
    </button>
  );
}
