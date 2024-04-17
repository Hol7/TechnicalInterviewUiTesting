'use client'
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import CenterTwoSection from "./ui/centerTwoSection";
import DetailsHouse from "./ui/detailsHouse";

export default function Home() {

  useEffect(()=>{
    window.location.reload()
  })

  return (
    <main className="flex min-h-screen   flex-col items-center ">
      <CenterTwoSection />
    </main>
  );
}
