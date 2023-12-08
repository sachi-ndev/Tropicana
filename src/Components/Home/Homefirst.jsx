import React from "react";
import { Link } from "react-router-dom";

export default function Homefirst() {
  return (
    <div
      className="w-[100vw] h-[100vh] overflow-hidden flex items-center justify-center font-Ubuntu"
      id="home_bg"
    >
      <div className="text-center">
        <h1 className="text-[35px]" id="starthead1">
          Now, anyone can farm <br />
          <span className="text-[5vw] font-Ubuntu font-[500]"
          id="starthead2"
          >
            Easy Plant Kits for everyone
          </span>
        </h1>
        <Link to='/shop/create'>
        <button className="flex items-center bg-gradient-to-r from-[rgb(55,128,47)]  to-[rgb(63,123,56)] px-7 py-2 mt-4  gap-3 rounded-3xl mx-auto">
          Shop Now
          <div className="bg-[rgb(69,134,58)] rounded-full ml-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M17.7333 23.0333C17.4667 22.7666 17.3387 22.4444 17.3493 22.0666C17.3609 21.6889 17.5 21.3666 17.7667 21.1L21.5333 17.3333H6.66667C6.28889 17.3333 5.972 17.2053 5.716 16.9493C5.46089 16.6942 5.33333 16.3778 5.33333 16C5.33333 15.6222 5.46089 15.3053 5.716 15.0493C5.972 14.7942 6.28889 14.6666 6.66667 14.6666H21.5333L17.7333 10.8666C17.4667 10.6 17.3333 10.2831 17.3333 9.91598C17.3333 9.54976 17.4667 9.23332 17.7333 8.96665C18 8.69998 18.3169 8.56665 18.684 8.56665C19.0502 8.56665 19.3667 8.69998 19.6333 8.96665L25.7333 15.0666C25.8667 15.2 25.9613 15.3444 26.0173 15.5C26.0724 15.6555 26.1 15.8222 26.1 16C26.1 16.1778 26.0724 16.3444 26.0173 16.5C25.9613 16.6555 25.8667 16.8 25.7333 16.9333L19.6 23.0666C19.3556 23.3111 19.0502 23.4333 18.684 23.4333C18.3169 23.4333 18 23.3 17.7333 23.0333Z"
                fill="#E0E0E0"
                />
            </svg>
          </div>
        </button>
        </Link>
      </div>
    </div>
  );
}
