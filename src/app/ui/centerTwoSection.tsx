"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from 'next/navigation'
import HousesFilter from "../components/housesFilter";
import HouseCard from "../components/houseCard";
import OurMap from "../components/map";
import DetailsHouse from "./detailsHouse";

export default function CenterTwoSection() {
  const router = useRouter()
  // bg-red w-full  mt-16 h-screen
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });

  useEffect( () => {
    router.refresh()
  })

  return (
    <>
      <div className="h-screen w-full mt-16 flex flex-col lg:flex-row lg:justify-center lg:flex-wrap lg:fixed">
        <div
          // className={`h-screen  ${
          //   isMobile ? "hidden" : "w-6/12"
          // }`}
          className="hidden md:flex bg-gray md:h-screen md:w-6/12"
        >
         <OurMap/>
        </div>
        <div
          className={`h-screen bg-RightGray md:overflow-y-auto  md:py-10 md:px-4  ${
            isMobile ? "w-full" : "w-6/12"
          }`}
        >
          <HousesFilter />
          <HouseCard/>
        </div>
      </div>
    </>
  );
}
