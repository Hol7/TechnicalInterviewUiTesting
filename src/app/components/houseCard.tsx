import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function HouseCard() {
 

  useEffect(()=>{
    window.location.reload
  })
  return (
    // <main className=" min-h-screen  ">
    <div className="bg-RightGray w-full md:w-[20rem] cursor-pointer hover:shadow shadow-md border border-borderNav rounded-md my-4">
     
  
      <div className="w-screen md:w-full h-[250px]  " style={{ objectFit: "contain" }}>
        <div className="w-full md:max-w-2xl mx-auto">
          <div
            id="default-carousel"
            className="relative  overflow-hidden shadow-lg"
            style={{
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              // objectFit: "contain",
            }}
            data-carousel="static"
          >
            <div className="relative h-60 md:h-60" data-carousel-inner>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  //   width={350}
                  //   height={200}
                  className="object-cover w-full h-full"
                  alt="Slide 1"
                />
                {/* <span className="absolute  transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-red md:text-2xl ">
                  First Slide ccxcxc
                </span> */}
                <div className=" hidden md:flex justify-around w-full ">
                  <p
                    className=" font-bold  bg-red text-white py-1 px-2 rounded-full font-normal text-xs "
                    style={{ zIndex: 1, top: 10 }}
                  >
                    LISTED BY REDFIN
                  </p>
                  <p
                    className=" font-bold  bg-royalBleu text-white py-1 px-2 rounded-full font-normal text-xs "
                    style={{ zIndex: 1, top: 10 }}
                  >
                    3D WALKTHROUGH
                  </p>
                </div>
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  className="object-cover w-full h-full"
                  alt="Slide 2"
                  //    height={100}
                  //   className="object-cover w-full "
                  //   width={350}
                  //   height={500}
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  //   className="object-cover w-full h-full"
                  // width={350}
                  // height={500}
                  // height={100}
                  className="object-cover w-full h-full"
                  alt="Slide 3"
                />
              </div>
            </div>

            <div
              className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2"
              data-carousel-indicators
            >
              <button
                type="button"
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
              ></button>
            </div>

            <button
              type="button"
              className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
              data-carousel-prev
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
              data-carousel-next
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          {/* <p className="mt-5 text-center text-gray-700 dark:text-gray-300">
            This carousel slider component is part of a larger, open-source
            library of Tailwind CSS components. Learn more by going to the
            official
            <a
              className="text-blue-600 hover:underline"
              href="https://flowbite.com/docs/getting-started/introduction/"
              target="_blank"
            >
              Flowbite Documentation
            </a>
            .
          </p> */}
          <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
        </div>
        {/* <p className='font-bold z-[100]'>tokoss</p> */}

        {/* <Image
          src="/house1.jpeg"
          width={350}
          height={500}
          
          style={{
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            objectFit: "contain",
          }}
          alt="Picture of the author"
        /> */}
        {/* <div className=" flex justify-around w-full ">
          <p
            className=" font-bold  bg-red text-white py-1 px-2 rounded-full font-normal text-xs "
            style={{ zIndex: 1, top: 10 }}
          >
            LISTED BY REDFIN
          </p>
          <p
            className=" font-bold  bg-royalBleu text-white py-1 px-2 rounded-full font-normal text-xs "
            style={{ zIndex: 1, top: 10 }}
          >
            3D WALKTHROUGH
          </p>
        </div> */}
      </div>
      <Link href='/houses'>
      <div className="w-screen flex w-full justify-between p-4">
        <p className="font-bold">$ 750000</p>

        <div className="w-20 flex align-center justify-between ">
          <button>
            <Icon
              icon="ph:share-fat-light"
              style={{ color: "black" }}
              width={25}
              height={25}
            />
          </button>

          <button>
            <Icon
              icon="ant-design:heart-outlined"
              style={{ color: "black" }}
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
      <div className="w-screen md:w-auto py-1 mb-4 px-4">
        <div className="w-full flex justify-start align-center  ">
          <p className="font-light pr-8">2 bed</p>
          <p className="font-light pr-8">2 path</p>
          <p className="font-light pr-8">299 sq ft</p>
        </div>
        <div className="w-full flex justify-start align-center py-2 ">
          <p className="font-light pr-8 text-xs">
            440 L St NW #1110, Washington, DC 20001
          </p>
          {/* <p className='font-light pr-8'>2 path</p>
                <p className='font-light pr-8'>299 sq ft</p> */}
        </div>
      </div>
      </Link>
    </div>
    // </main>
  );
}
