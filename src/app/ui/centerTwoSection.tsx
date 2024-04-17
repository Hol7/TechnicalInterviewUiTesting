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
      <div className="h-screen w-full mt-16 flex flex-col lg:flex-row lg:justify-center lg:flex-wrap fixed">
        <div
          className={`h-screen  bg-blue   ${
            isMobile ? "hidden" : "w-6/12"
          }`}
        >
         <OurMap/>
        </div>
        <div
          className={`h-screen bg-RightGray overflow-y-auto  py-10 px-4  ${
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
