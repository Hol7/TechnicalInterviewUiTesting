"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";


export default function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Buy",
    },
    {
      id: 2,
      link: "Rent",
    },
    {
      id: 3,
      link: "Sell",
    },
    {
      id: 4,
      link: "Redfin Premier",
    },
    {
      id: 5,
      link: "Mortgage",
    },
    {
      id: 6,
      link: "Real Estates Agents",
    },
    {
      id: 7,
      link: "Feed",
    },
  ];

  
  return (
    <div className="border-t-0 border-b-[1px] border-b-borderNav flex justify-between items-center w-full h-16 px-1 text-white bg-white fixed nav">
      <div className="flex items-center">
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <Link  href="/">
        <h3 className="text-5xl font-signature ml-2 mr-2">
          <Image
           
            src="/logo.png"
            width={100}
            height={50}
            alt="Picture of the author"
          />
        </h3>
        </Link>
      
        <input className="border hidden md:flex placeholder:text-borderNav text-black px-4 h-10 w-[350px] border-borderNav rounded-md"
         placeholder="City, Address, School, Agent, Zip"
        />
        <button className="bg-red h-[40px] w-[40px] grid justify-center align-center items-center  ml-3 rounded-md">
         <Icon
            icon="formkit:search"
            style={{ color: "white" }}
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className="flex justify-between items-center ">
      <ul className="hidden md:flex mr-4">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-blackNav nav-links px-3 cursor-pointer font-light  text-gray-500 hover:scale-105 hover:text-lightGreen duration-200 link-underline"
          >
            <Link
              href={link}
              className="text-sm flex justify-between items-center"
            >
              {link}{" "}
             { id == 4 || id == 7 ? '' : (<Icon
                icon="teenyicons:down-solid"
                style={{ fontSize: "5px" }}
                className="ml-2"
              />)}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mr-3 ml-3">
        <button className="bg-blackNav text-sm font-medium text-white h-10 w-[118px] rounded-md">Join / Sign in</button>
      </div>

      </div>

    

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? (
          <Icon icon="material-symbols:close" style={{ color: "white", fontSize: "40px" }} />
        ) : (
          <Icon icon="material-symbols:menu"  style={{ color: "black", fontSize: "20px" }}  />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-2 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
