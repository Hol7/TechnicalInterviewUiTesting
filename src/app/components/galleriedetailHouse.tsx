"use client";

import Image from "next/image";
import profilePic from '../../../public/house1.jpeg'
import profilePic1 from '../../../public/house.webp'
import { Icon } from "@iconify/react";
import OurMap from "./map";
import SmallMapDetailHouse from "./smallMapDetailHouse";


export default function GalleriedetailHouse() {

	return (
    <div className=" pt-4 px-40">
      <div className=" flex justify-center align-center w-full h-[400px]">
        <div className="w-[70%] pl-14 flex   cursor-pointer r justify-center content-center align-center">
          <Image
            src={profilePic}
            alt="Picture of the author"
              style={{
                borderTopLeftRadius: 6,
                // borderTopRightRadius: 6,
                borderBottomLeftRadius:6,
                // objectFit: "contain",\
              }}
              className="hover:opacity-80"
          />
        </div>
        <div className="w-[30%] grid  justify-center align-center">
          <div className="w-full ml-1 cursor-pointer  pb-1 h-[200px] flex justify-center align-center">
            <Image src={profilePic1} alt="Picture of the author" className="hover:opacity-80" />
          </div>
          <div className="w-full ml-1  cursor-pointer pt-1 h-[200px] flex justify-center align-center ">
            <Image src={profilePic} alt="Picture of the author" className="hover:opacity-80"/>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[70%]  pl-14 flex  rounded  align-center">

          <div className="mt-2">
          <div className="w-full flex justify-start align-center py-2 ">
              <p className="flex text-blackNav font-light pr-8 text-base">
              <Icon
                    icon="icon-park-outline:dot"
                    style={{ fontSize: "25px" , color:"#5BA7AE" }}
                    className="mr-111"
                  /> FOR SALE - ACTIVE
              </p>
            </div>
            <div className="w-full flex justify-start align-center py-2 ">
              <p className="font-normal pl-2 text-lg">
                440 L St NW #1110, Washington, DC 20001
              </p>
            </div>

            <div className="pl-2">
            <div className="w-full mt-4 flex justify-start align-center  ">
                <div className="">
                <p className="font-bold pr-20 text-2xl">$ 750000</p>
                <p className="font-light pr-8 pt-2">Est. $5,347/mo <span className="text-lightGreen">Get pre-approved</span> </p>

                </div>
                <div className="">
                <p className="font-bold pr-10 text-2xl">2</p>
                <p className="font-light pr-8 pt-2">Bed</p>

                </div>

                <div className="">
                <p className="font-bold pr-10 text-2xl">2</p>
                <p className="font-light pr-8 pt-2">Path</p>

                </div>


                <div className="">
                <p className="font-bold pr-10 text-2xl">995 </p>
                <p className="font-light pr-8 pt-2">Sq Ft</p>

                </div>
            </div>
              
            </div>
          </div>

          <div className="w-[100] h-[10px]  m-5">
            <SmallMapDetailHouse/>
          </div>
      
         
        </div>
        <br style={{ borderWidth:20}}/>
        {/* <div className="border">
dsdsds
          </div> */}
       
        <div className="w-[30%] grid justify-items-stretch  grid justify-center align-center items-center">
            <div className="flex py-4 px-1">
                <p className="font-bold  text-2xl">Thinking of buying?</p>
            </div>
            <div className="flex gap-2 p-2 w-full overflow-visible overflow-x-scroll ">
              <div className="border grid  mb-1 rounded-lg  cursor-pointer hover:text-lightGreen justify-center py-1 text-center w-[100px]">
                  <p className="px-1 text-xs">WEDNESDAY</p>
                  <p className="p-1 font-bold text-3xl">17</p>
                  <p className="">APR</p>
              </div>
              <div className="border grid  mb-1 rounded-lg  cursor-pointer hover:text-lightGreen justify-center py-1 text-center w-[100px]">
                  <p className="p-1  text-xs">WEDNESDAY</p>
                  <p className="p-1 font-bold text-3xl">18</p>
                  <p className="">APR</p>
              </div>
              <div className="border grid  mb-1 rounded-lg  cursor-pointer hover:text-lightGreen justify-center py-1 text-center w-[100px]">
                  <p className="p-1  text-xs">WEDNESDAY</p>
                  <p className="p-1 font-bold text-3xl">19</p>
                  <p className="">APR</p>
              </div>
         

         <div className="absolute  ml-[290px] mt-8 border w-[40px] z-4 h-[40px] bg-white  hover border-borderNav rounded-md   flex justify-center justify-self-end align-center">
          <button>

         <Icon
                    icon="uiw:right"
                    style={{ fontSize: "22px" , color:"black" }}
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
