import React from "react";
import pot1 from "./Assets/AGLAONEMA PINK 1.png";
import pot2 from "./Assets/GOLDEN KING MARBLE 1.png";
import pot3 from "./Assets/Radish microgreen seeds 1.png";
import pot4 from "./Assets/Sansevieria Fernwood Mikado 1.png";

export default function RecentProducts() {
  return (
    <div className=" font-Ubuntu pb-40 w-[100vw] flex flex-col items-center">
      <div className="flex justify-between  flex-col items-center ">
        <h1 className=" mx-auto mt-[2rem]" id="starthead2">
          Our Recent Products
        </h1>
        <div
          className=" w-[90vw]  mt-[4rem] md:max-h-[50vh]  md:place-items-start justify-between relative"
          id="productgrid"
        >
          <div id="namehider">
            <div
              className="bg-[#f0f0f0]  p-[2rem]   font-medium rounded-2xl  flex flex-col top-0  items-center justify-center relative ]"
              id="potdiv"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4 top-4"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M11.9167 22.75L8.47709 19.6625C7.17709 18.4889 6.06234 17.4417 5.13284 16.5208C4.20262 15.6 3.43526 14.7333 2.83076 13.9208C2.22554 13.1083 1.78318 12.3229 1.50368 11.5646C1.22345 10.8063 1.08334 10.0118 1.08334 9.18125C1.08334 7.48403 1.65209 6.071 2.78959 4.94217C3.92709 3.81406 5.34445 3.25 7.04168 3.25C7.98057 3.25 8.87432 3.44861 9.72293 3.84583C10.5715 4.24306 11.3028 4.80278 11.9167 5.525C12.5306 4.80278 13.2618 4.24306 14.1104 3.84583C14.959 3.44861 15.8528 3.25 16.7917 3.25C18.2542 3.25 19.482 3.66058 20.475 4.48175C21.4681 5.30364 22.1451 6.3375 22.5063 7.58333H20.2042C19.8792 6.86111 19.4007 6.31944 18.7688 5.95833C18.1368 5.59722 17.4778 5.41667 16.7917 5.41667C15.8708 5.41667 15.0764 5.66511 14.4083 6.162C13.7403 6.65817 13.1174 7.3125 12.5396 8.125H11.2938C10.734 7.3125 10.0978 6.65817 9.38493 6.162C8.67137 5.66511 7.89029 5.41667 7.04168 5.41667C6.01251 5.41667 5.12309 5.77308 4.37343 6.48592C3.62448 7.19947 3.25001 8.09792 3.25001 9.18125C3.25001 9.77708 3.3764 10.3819 3.62918 10.9958C3.88195 11.6097 4.33334 12.3186 4.98334 13.1224C5.63334 13.9255 6.51807 14.8641 7.63751 15.938C8.75695 17.0127 10.1833 18.3083 11.9167 19.825C12.3861 19.4097 12.9368 18.9313 13.5688 18.3896C14.2007 17.8479 14.7063 17.3965 15.0854 17.0354L15.3292 17.2792L15.8568 17.8078L16.3854 18.3354L16.6292 18.5792C16.232 18.9403 15.7264 19.387 15.1125 19.9193C14.4986 20.4522 13.957 20.9264 13.4875 21.3417L11.9167 22.75ZM19.5 18.4167V15.1667H16.25V13H19.5V9.75H21.6667V13H24.9167V15.1667H21.6667V18.4167H19.5Z"
                  fill="black"
                />
              </svg>
              <img src={pot1} className="mt-8 w-[14rem] aspect-square" alt="" />
              <div className="w-full text-left text-[1.4rem]   " id="potname">
                <h1>Aglaonema</h1>
                <p>$ 250</p>
                <button className="mt-3 w-[200px] bg-secondary text-white px-5 py-2 rounded-2xl">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="text-[1.2rem] p-4 " id="hidename">
              <h1>Aglaonema</h1>
              <p>$ 250</p>
            </div>
          </div>



          <div>
            <div id="namehider">
              <div
                className="bg-[#f0f0f0]  p-[2rem]   font-medium rounded-2xl  flex flex-col top-0  items-center justify-center relative ]"
                id="potdiv"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-4 top-4"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    d="M17.25 16.2917V13.4167H14.375V11.5H17.25V8.625H19.1667V11.5H22.0417V13.4167H19.1667V16.2917H17.25ZM10.5417 20.125L7.49895 17.3937C6.34895 16.3556 5.36283 15.4292 4.54058 14.6146C3.71769 13.8 3.03887 13.0333 2.50412 12.3146C1.96873 11.5958 1.57741 10.901 1.33016 10.2302C1.08227 9.55938 0.958328 8.8566 0.958328 8.12188C0.958328 6.62049 1.46145 5.3705 2.4677 4.37192C3.47395 3.37397 4.72777 2.875 6.22916 2.875C7.05972 2.875 7.85034 3.04654 8.60104 3.38962C9.35173 3.73335 9.99861 4.22465 10.5417 4.86354C11.0847 4.22465 11.7316 3.73335 12.4823 3.38962C13.233 3.04654 14.0236 2.875 14.8542 2.875C16.2118 2.875 17.3497 3.28613 18.2677 4.10838C19.1865 4.93126 19.7576 5.89375 19.9812 6.99583C19.6937 6.88403 19.4062 6.80001 19.1187 6.74379C18.8312 6.68821 18.5517 6.66042 18.2802 6.66042C16.667 6.66042 15.2934 7.22328 14.1594 8.349C13.0253 9.47536 12.4583 10.8451 12.4583 12.4583C12.4583 13.2889 12.626 14.0754 12.9615 14.8177C13.2969 15.5608 13.768 16.1958 14.375 16.7229C14.0715 16.9944 13.676 17.342 13.1886 17.7656C12.7017 18.1885 12.2826 18.5597 11.9312 18.8792L10.5417 20.125Z"
                    fill="#AF0112"
                  />
                </svg>
                <img src={pot2} className="mt-8 w-[14rem] aspect-square" alt="" />
                <div className="w-full text-left text-[1.4rem]   " id="potname">
                  <h1>Golden King Marble</h1>
                  <p>$ 340</p>
                  <button className="mt-3 w-[200px] bg-secondary text-white px-5 py-2 rounded-2xl">
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="text-[1.2rem] p-4 " id="hidename">
                <h1>Golden King Marble</h1>
                <p>$ 340</p>
              </div>
            </div>
          </div>




          <div>
            <div id="namehider">
              <div
                className="bg-[#f0f0f0]  p-[2rem]   font-medium rounded-2xl  flex flex-col top-0  items-center justify-center relative ]"
                id="potdiv"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-4 top-4"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    d="M17.25 16.2917V13.4167H14.375V11.5H17.25V8.625H19.1667V11.5H22.0417V13.4167H19.1667V16.2917H17.25ZM10.5417 20.125L7.49895 17.3937C6.34895 16.3556 5.36283 15.4292 4.54058 14.6146C3.71769 13.8 3.03887 13.0333 2.50412 12.3146C1.96873 11.5958 1.57741 10.901 1.33016 10.2302C1.08227 9.55938 0.958328 8.8566 0.958328 8.12188C0.958328 6.62049 1.46145 5.3705 2.4677 4.37192C3.47395 3.37397 4.72777 2.875 6.22916 2.875C7.05972 2.875 7.85034 3.04654 8.60104 3.38962C9.35173 3.73335 9.99861 4.22465 10.5417 4.86354C11.0847 4.22465 11.7316 3.73335 12.4823 3.38962C13.233 3.04654 14.0236 2.875 14.8542 2.875C16.2118 2.875 17.3497 3.28613 18.2677 4.10838C19.1865 4.93126 19.7576 5.89375 19.9812 6.99583C19.6937 6.88403 19.4062 6.80001 19.1187 6.74379C18.8312 6.68821 18.5517 6.66042 18.2802 6.66042C16.667 6.66042 15.2934 7.22328 14.1594 8.349C13.0253 9.47536 12.4583 10.8451 12.4583 12.4583C12.4583 13.2889 12.626 14.0754 12.9615 14.8177C13.2969 15.5608 13.768 16.1958 14.375 16.7229C14.0715 16.9944 13.676 17.342 13.1886 17.7656C12.7017 18.1885 12.2826 18.5597 11.9312 18.8792L10.5417 20.125Z"
                    fill="#AF0112"
                  />
                </svg>
                <img src={pot3} className="mt-8 w-[14rem] aspect-square" alt="" />
                <div className="w-full text-left text-[1.4rem]   " id="potname">
                  <h1>Radish Micro Green</h1>
                  <p>$ 250</p>
                  <button className="mt-3 w-[200px] bg-secondary text-white px-5 py-2 rounded-2xl">
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="text-[1.2rem] p-4 " id="hidename">
                <h1>Radish Micro Green</h1>
                <p>$ 250</p>
              </div>
            </div>
          </div>



          <div>
            <div id="namehider">
              <div
                className="bg-[#f0f0f0]  p-[2rem]   font-medium rounded-2xl  flex flex-col top-0  items-center justify-center relative ]"
                id="potdiv"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-4 top-4"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M11.9167 22.75L8.47709 19.6625C7.17709 18.4889 6.06234 17.4417 5.13284 16.5208C4.20262 15.6 3.43526 14.7333 2.83076 13.9208C2.22554 13.1083 1.78318 12.3229 1.50368 11.5646C1.22345 10.8063 1.08334 10.0118 1.08334 9.18125C1.08334 7.48403 1.65209 6.071 2.78959 4.94217C3.92709 3.81406 5.34445 3.25 7.04168 3.25C7.98057 3.25 8.87432 3.44861 9.72293 3.84583C10.5715 4.24306 11.3028 4.80278 11.9167 5.525C12.5306 4.80278 13.2618 4.24306 14.1104 3.84583C14.959 3.44861 15.8528 3.25 16.7917 3.25C18.2542 3.25 19.482 3.66058 20.475 4.48175C21.4681 5.30364 22.1451 6.3375 22.5063 7.58333H20.2042C19.8792 6.86111 19.4007 6.31944 18.7688 5.95833C18.1368 5.59722 17.4778 5.41667 16.7917 5.41667C15.8708 5.41667 15.0764 5.66511 14.4083 6.162C13.7403 6.65817 13.1174 7.3125 12.5396 8.125H11.2938C10.734 7.3125 10.0978 6.65817 9.38493 6.162C8.67137 5.66511 7.89029 5.41667 7.04168 5.41667C6.01251 5.41667 5.12309 5.77308 4.37343 6.48592C3.62448 7.19947 3.25001 8.09792 3.25001 9.18125C3.25001 9.77708 3.3764 10.3819 3.62918 10.9958C3.88195 11.6097 4.33334 12.3186 4.98334 13.1224C5.63334 13.9255 6.51807 14.8641 7.63751 15.938C8.75695 17.0127 10.1833 18.3083 11.9167 19.825C12.3861 19.4097 12.9368 18.9313 13.5688 18.3896C14.2007 17.8479 14.7063 17.3965 15.0854 17.0354L15.3292 17.2792L15.8568 17.8078L16.3854 18.3354L16.6292 18.5792C16.232 18.9403 15.7264 19.387 15.1125 19.9193C14.4986 20.4522 13.957 20.9264 13.4875 21.3417L11.9167 22.75ZM19.5 18.4167V15.1667H16.25V13H19.5V9.75H21.6667V13H24.9167V15.1667H21.6667V18.4167H19.5Z"
                    fill="black"
                  />
                </svg>
                <img src={pot4} className="mt-8 w-[14rem] aspect-square" alt="" />
                <div className="w-full text-left text-[1.4rem]   " id="potname">
                  <h1 className="text-[1.3rem]">Sanservia Fernwood</h1>
                  <p>$ 250</p>
                  <button className="mt-3 w-[200px] bg-secondary text-white px-5 py-2 rounded-2xl">
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="text-[1.2rem] p-4 " id="hidename">
                <h1>Sanservia Fernwood</h1>
                <p>$ 250</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
