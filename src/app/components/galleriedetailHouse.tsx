"use client";

import Image from "next/image";
import profilePic from "../../../public/house1.jpeg";
import profilePic1 from "../../../public/house.webp";
import { Icon } from "@iconify/react";
import OurMap from "./map";
import SmallMapDetailHouse from "./smallMapDetailHouse";

export default function GalleriedetailHouse() {
  return (
    <div className=" pt-4 md:px-40">
      <div className="grid md:flex justify-center align-center w-screen md:w-full md:h-[400px]">
        <div className="w-screen h-full  md:w-[70%] md:pl-14 flex cursor-pointer  justify-center content-center align-center">
          <Image
            src={profilePic}
            alt="Picture of the author"
            style={{
              borderTopLeftRadius: 6,
              // borderTopRightRadius: 6,
              borderBottomLeftRadius: 6,
              // objectFit: "contain",\
            }}
            className="hover:opacity-80"
          />
        </div>
        <div className="hidden md:grid w-screen md:w-[30%] grid  justify-center align-center">
          <div className="w-full ml-1 cursor-pointer  pb-1 h-[200px] flex justify-center align-center">
            <Image
              src={profilePic1}
              alt="Picture of the author"
              className="hover:opacity-80"
            />
          </div>
          <div className="w-full ml-1  cursor-pointer pt-1 h-[200px] flex justify-center align-center ">
            <Image
              src={profilePic}
              alt="Picture of the author"
              className="hover:opacity-80"
            />
          </div>
        </div>
      </div>
      <div className="w-screen md:w-auto md:flex">
        <div className="w-screen md:w-[70%]  md:pl-14 flex  rounded  align-center">
          <div className="px-2 mt-2">
            <div className="w-full flex justify-start align-center py-2 ">
              <p className="flex text-blackNav font-light pr-8 md:text-base">
                <Icon
                  icon="icon-park-outline:dot"
                  style={{ fontSize: "25px", color: "#5BA7AE" }}
                  className="mr-111"
                />{" "}
                FOR SALE - ACTIVE
              </p>
            </div>
            <div className="w-full flex justify-start align-center py-2 ">
              <p className="font-normal pl-2 md:text-lg">
                440 L St NW #1110, Washington, DC 20001
              </p>
            </div>

            <div className="pl-2">
              <div className="w-full mt-4 flex justify-start align-center  ">
                <div className="">
                  <p className="font-bold md:pr-20 md:text-2xl ">$ 750000</p>
                  <p className="font-light pr-8 pt-2">
                    Est. $5,347/mo
                    <span className="text-lightGreen">Get pre-approved</span>{" "}
                  </p>
                </div>
                <div className="">
                  <p className="font-bold pr-10 md:text-2xl">2</p>
                  <p className="font-light pr-8 pt-2">Bed</p>
                </div>

                <div className="">
                  <p className="font-bold pr-10 md:text-2xl">2</p>
                  <p className="font-light pr-8 pt-2">Path</p>
                </div>

                <div className="">
                  <p className="font-bold pr-10 md:text-2xl">995 </p>
                  <p className="font-light pr-8 pt-2">Sq Ft</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex mw-[100] h-[10px]  m-5">
            <SmallMapDetailHouse />
          </div>
        </div>
       
        {/* <div className="border">
dsdsds
          </div> */}

        <div className="px-2 md:px-0 w-screen md:w-[30%] grid justify-items-stretch  grid justify-center align-center items-center">
          <div className="flex py-4 px-1">
            <p className="font-bold  md:text-2xl">Thinking of buying?</p>
          </div>
          <div className="flex gap-2 p-2 w-full overflow-visible overflow-x-scroll ">
            {[0,1,2].map((i) => {return <div className="border grid px-1 py-6 md:px-2 md:py-2 mb-1 rounded-lg  cursor-pointer hover:text-lightGreen justify-center py-1 text-center md:w-[100px]">
              <p className="px-1 md:text-xs">WEDNESDAY</p>
              <p className="p-1 font-bold md:text-3xl">{i}</p>
              <p className="">APR</p>
            </div>})}
            {/* <div className="border grid  mb-1 rounded-lg  cursor-pointer hover:text-lightGreen justify-center py-1 text-center w-[100px]">
              <p className="p-1  md:text-xs">WEDNESDAY</p>
              <p className="p-1 font-bold md:text-3xl">18</p>
              <p className="">APR</p>
            </div>
            <div className="border grid  mb-1 rounded-lg  cursor-pointer hover:text-lightGreen justify-center py-1 text-center w-[100px]">
              <p className="p-1  md:text-xs">WEDNESDAY</p>
              <p className="p-1 font-bold md:text-3xl">19</p>
              <p className="">APR</p>
            </div> */}

            <div className="hidden md:flex md:absolute  ml-[290px] mt-8 border w-[40px] z-4 h-[40px] bg-white  hover border-borderNav rounded-md   flex justify-center justify-self-end align-center">
              <button>
                <Icon
                  icon="uiw:right"
                  style={{ fontSize: "22px", color: "black" }}
                  // className="mr-111"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
