import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

export default function Subscip() {
  return (
    <div>
      <div className="h-[30rem] px-[5rem] justify-between w-[100vw] mx-auto flex flex-col sm:flex-col  md:flex-row items-center  ">
        <div className="w-full md:w-[25vw] ">
          <h1 className="" id="worldhead">
            The world's <br />
            1st subscription based <br />
            Indoor Plant Company
          </h1>
          <p className="text-justify ">
            The world's first subscription based Indoor Plant Company -
            Harvestay is revolutionising the way people buy and care for their
            plants. With this innovative model, customers can s ubscribe to a
            monthly delivery of a curated selection of healthy and vibrant
            plants that{" "}
          </p>
        </div>

        <div className="bg-white w-full md:w-[42rem] h-[22rem] p-2 shadow-2xl ">
          <div
            className="h-full w-full  rounded-lg flex items-center justify-center relative"
            id="board"
          >
            <div
              className="bg-tertiary rounded-full border-0 md:border-[15px] absolute"
              id="playbtn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68"
                height="68"
                viewBox="0 0 68 68"
                fill="none"
              >
                <path
                  d="M26.9875 51.0709C26.0431 51.6847 25.0863 51.7197 24.1173 51.1757C23.1502 50.6336 22.6667 49.7959 22.6667 48.6625V19.3375C22.6667 18.2042 23.1502 17.3655 24.1173 16.8215C25.0863 16.2794 26.0431 16.3153 26.9875 16.9292L50.0792 31.5917C50.9292 32.1584 51.3542 32.9611 51.3542 34C51.3542 35.0389 50.9292 35.8417 50.0792 36.4084L26.9875 51.0709ZM28.3333 43.4917L43.2083 34L28.3333 24.5084V43.4917Z"
                  fill="white"
                  fillOpacity="0.9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <h1
          className=" mx-auto mt-[2rem] ml-[40vw] font-semibold"
          id="starthead2"
        >
          Our Services
        </h1>

        <Splide
          options={{
            rewind: true,
            type: "loop",
            autoplay: false,
            fixedWidth: "375px",

            gap: "2rem",
          }}
        >
          <SplideSlide className="">
            <div
              id="splide1"
              className="w-[375px] h-[450px] rounded-2xl bg-blue relative overflow-hidden"
            >
              <div
                className="  w-[375px] h-[450px] absolute  text-white"
                id="shadow_div"
              >
                <h1 className="w-[280px] text-start ml-5 text-[30px] font-semibold p-9">
                  Easy Plant Kits
                </h1>
                <p className="w-[280px] text-justify mx-auto text-[19px]">
                  A small plant in the room or at the work desk can help
                  considerably in maintaining fresh air around you. So with a
                  plant gift, you are actually gifting them good health along
                  with years of beauty, companionship, and care.
                </p>

                <a className="underline absolute bottom-7 right-7">View More</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              id="splide2"
              className="w-[375px] h-[450px] rounded-2xl bg-blue relative overflow-hidden"
            >
              <div
                className="  w-[375px] h-[450px] absolute  text-white"
                id="shadow_div"
              >
                <h1 className="w-[280px] text-start ml-5 text-[30px] font-semibold p-9">
                  Landscaping
                </h1>
                <p className="w-[280px] text-justify mx-auto text-[19px]">
                  A small plant in the room or at the work desk can help
                  considerably in maintaining fresh air around you. So with a
                  plant gift, you are actually gifting them good health along
                  with years of beauty, companionship, and care.
                </p>

                <a className="underline absolute bottom-7 right-7">View More</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              id="splide3"
              className="w-[375px] h-[450px] rounded-2xl bg-blue relative overflow-hidden"
            >
              <div
                className="  w-[375px] h-[450px] absolute  text-white"
                id="shadow_div"
              >
                <h1 className="w-[280px] text-start ml-5 text-[30px] font-semibold p-9">
                  Plant Gift
                </h1>
                <p className="w-[280px] text-justify mx-auto text-[19px]">
                  A small plant in the room or at the work desk can help
                  considerably in maintaining fresh air around you. So with a
                  plant gift, you are actually gifting them good health along
                  with years of beauty, companionship, and care.
                </p>

                <a className="underline absolute bottom-7 right-7">View More</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              id="splide4"
              className="w-[375px] h-[450px] rounded-2xl bg-blue relative overflow-hidden"
            >
              <div
                className="  w-[375px] h-[450px] absolute  text-white"
                id="shadow_div"
              >
                <h1 className="w-[280px] text-start ml-5 text-[25px] font-semibold p-9">
                  Balcony & Terrace Gardens
                </h1>
                <p className="w-[280px] text-justify mx-auto text-[19px]">
                  A small plant in the room or at the work desk can help
                  considerably in maintaining fresh air around you. So with a
                  plant gift, you are actually gifting them good health along
                  with years of beauty, companionship, and care.
                </p>

                <a className="underline absolute bottom-7 right-7">View More</a>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
