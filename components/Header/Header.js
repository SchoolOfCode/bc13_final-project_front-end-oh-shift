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
        <Link href="/">
        <svg width="99" height="31" viewBox="0 0 99 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.5531 17.5232C42.5531 18.2409 42.3737 18.8536 42.0148 19.3615C41.6615 19.8639 41.1647 20.2475 40.5243 20.5125C39.884 20.7775 39.1304 20.91 38.2637 20.91C37.8055 20.91 37.3722 20.8879 36.9636 20.8438C36.5551 20.7996 36.1798 20.7361 35.8375 20.6533C35.4952 20.5705 35.1944 20.4684 34.9349 20.3469V18.9972C35.3489 19.1683 35.854 19.3284 36.4503 19.4774C37.0465 19.621 37.6703 19.6927 38.3217 19.6927C38.9289 19.6927 39.4423 19.6127 39.8619 19.4526C40.2814 19.287 40.5988 19.0524 40.8141 18.7488C41.035 18.4396 41.1454 18.0697 41.1454 17.6391C41.1454 17.2251 41.0543 16.8801 40.8721 16.6041C40.6899 16.3225 40.3863 16.0686 39.9612 15.8423C39.5417 15.6104 38.9676 15.3647 38.2389 15.1053C37.7255 14.9231 37.2728 14.7244 36.8808 14.5091C36.4889 14.2883 36.1604 14.0398 35.8954 13.7638C35.6305 13.4878 35.429 13.1676 35.291 12.8033C35.1585 12.4389 35.0922 12.0221 35.0922 11.5529C35.0922 10.907 35.2551 10.355 35.5808 9.89676C35.912 9.43305 36.3674 9.07974 36.9471 8.83684C37.5323 8.58842 38.203 8.46421 38.9593 8.46421C39.6052 8.46421 40.2014 8.52494 40.7479 8.64639C41.2999 8.76784 41.8051 8.93069 42.2633 9.13494L41.8244 10.3439C41.3883 10.1617 40.9246 10.0099 40.4332 9.88848C39.9474 9.76703 39.4451 9.70631 38.9262 9.70631C38.4072 9.70631 37.9684 9.78359 37.6095 9.93816C37.2562 10.0872 36.9857 10.2998 36.798 10.5758C36.6103 10.8518 36.5165 11.1803 36.5165 11.5612C36.5165 11.9862 36.6048 12.3395 36.7815 12.6211C36.9636 12.9026 37.2507 13.1538 37.6427 13.3746C38.0401 13.5899 38.5646 13.8163 39.216 14.0536C39.9281 14.3131 40.5326 14.5891 41.0294 14.8817C41.5263 15.1688 41.9044 15.5221 42.1639 15.9416C42.4233 16.3557 42.5531 16.8829 42.5531 17.5232ZM48.747 20.7444H47.331V9.8802H43.5219V8.63811H52.5395V9.8802H48.747V20.7444ZM64.8694 14.6747C64.8694 15.6076 64.7507 16.4578 64.5133 17.2251C64.2759 17.9869 63.9226 18.6439 63.4534 19.1959C62.9897 19.7424 62.4128 20.1647 61.7227 20.4628C61.0327 20.7609 60.2322 20.91 59.3213 20.91C58.3829 20.91 57.5631 20.7609 56.862 20.4628C56.1664 20.1647 55.5868 19.7397 55.1231 19.1876C54.6649 18.6356 54.3198 17.9759 54.088 17.2086C53.8617 16.4412 53.7485 15.5911 53.7485 14.6581C53.7485 13.4215 53.9527 12.3368 54.3613 11.4038C54.7698 10.4709 55.388 9.74495 56.2161 9.22603C57.0497 8.70711 58.0931 8.44765 59.3462 8.44765C60.5441 8.44765 61.5516 8.70435 62.3686 9.21775C63.1912 9.73115 63.8122 10.4543 64.2318 11.3873C64.6568 12.3147 64.8694 13.4105 64.8694 14.6747ZM55.2307 14.6747C55.2307 15.7015 55.377 16.5903 55.6696 17.341C55.9622 18.0918 56.4093 18.6715 57.0111 19.08C57.6183 19.4885 58.3884 19.6927 59.3213 19.6927C60.2598 19.6927 61.0272 19.4885 61.6234 19.08C62.2251 18.6715 62.6695 18.0918 62.9565 17.341C63.2436 16.5903 63.3871 15.7015 63.3871 14.6747C63.3871 13.1124 63.0587 11.8924 62.4017 11.0146C61.7503 10.1314 60.7318 9.68975 59.3462 9.68975C58.4077 9.68975 57.6349 9.89124 57.0276 10.2942C56.4204 10.6972 55.9677 11.2713 55.6696 12.0166C55.377 12.7563 55.2307 13.6424 55.2307 14.6747ZM76.2966 20.7444H74.6322L70.2683 14.8569L68.9766 16.0161V20.7444H67.5689V8.63811H68.9766V14.6747C69.2912 14.3159 69.6142 13.9598 69.9454 13.6065C70.2766 13.2477 70.6051 12.8861 70.9308 12.5217L74.4666 8.63811H76.1145L71.2951 13.888L76.2966 20.7444ZM86.6805 20.7444H85.0161L80.6522 14.8569L79.3605 16.0161V20.7444H77.9528V8.63811H79.3605V14.6747C79.6751 14.3159 79.9981 13.9598 80.3293 13.6065C80.6605 13.2477 80.989 12.8861 81.3147 12.5217L84.8505 8.63811H86.4984L81.679 13.888L86.6805 20.7444ZM95.93 20.7444L94.4395 16.9022H89.587L88.1048 20.7444H86.6805L91.4171 8.58842H92.684L97.3874 20.7444H95.93ZM94.0172 15.6518L92.6012 11.8344C92.5681 11.7351 92.5129 11.5722 92.4356 11.3459C92.3638 11.1195 92.2893 10.8849 92.212 10.642C92.1347 10.3991 92.0712 10.2031 92.0215 10.0541C91.9663 10.2804 91.9056 10.5068 91.8394 10.7331C91.7786 10.9539 91.7179 11.1609 91.6572 11.3542C91.5965 11.5418 91.544 11.7019 91.4999 11.8344L90.059 15.6518H94.0172Z" fill="#00272B"/>
<rect y="0.191406" width="30.2722" height="30.2722" fill="white"/>
<rect y="0.191406" width="15.1361" height="15.1361" fill="#FF6201"/>
<rect y="15.3274" width="15.0133" height="15.1361" fill="#50FFB1"/>
<line x1="0.12054" y1="0.191406" x2="15.1361" y2="15.2069" stroke="white" stroke-width="0.17047" stroke-linecap="round"/>
<path d="M30.2722 15.3274L15.1361 30.4635" stroke="#00272B" stroke-width="0.201814" stroke-linecap="round"/>
<rect x="15.136" y="0.191406" width="15.1361" height="15.1361" fill="#00272B"/>
<circle cx="22.704" cy="7.75945" r="7.56804" fill="white"/>
<path d="M15.1361 22.8954C15.1361 27.0751 11.7478 30.4635 7.56804 30.4635C3.38833 30.4635 0 27.0751 0 22.8954C0 18.7157 3.38833 15.3274 7.56804 15.3274C11.7478 15.3274 15.1361 18.7157 15.1361 22.8954Z" fill="#4C4C4C"/>
</svg>
        </Link>

      </div>
      <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="avatar">
              <div className="w-8 mask mask-hexagon">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
          </button>
          </div>
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
  );
}

export default Header;
