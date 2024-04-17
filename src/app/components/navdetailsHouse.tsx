
"use client";
import React from 'react'
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function NavdetailsHouse() {
    const links = [
        {
          id: 1,
          name:"Search",
          link: "/",
        },
        {
          id: 2,
          name:"Overview",
          link: "Overview",
        },
        {
          id: 3,
          name:"Property details ",
          link: "Property details ",
        },
        {
          id: 4,
          name:"Sale & tax history",
          link: "Sale & tax history",
        },
        {
          id: 5,
          name:"Schools",
          link: "Schools",
        },
        {
          id: 6,
          name:"Climate",
          link: "Climate",
        },
        {
          id: 7,
          name:"Favorite",
          link: "Favorite",
        },
        {
          id: 8,
          name:"Hide",
          link: "Hide",
        },
        {
          id: 9,
          name:"Share",
          link: "Share",
        },
      ];

	return (
        <div className="flex justify-end items-center pt-16 px-10">
        <ul className="hidden md:flex mr-4 mt-2">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="text-blackNav nav-links px-3 py-3 m-3  cursor-pointer font-light rounded-sm h-10 text-gray-500 hover:bg-hoverGray hover:text-black duration-200 link-underline"
            >
              <Link
                href={link}
                className={`text-sm font-normal ${ id === 1 ? 'text-lightGreen' :'' } flex align-center justify-center items-center`}
              >
                {id == 2 || id == 3 || id == 4 || id == 5 || id == 6 ? (
                  ""
                ) : id == 1 ? (
                  <Icon
                    icon="mingcute:arrow-left-line"
                    style={{ fontSize: "25px", color: "#5BA7AE" }}
                    className="mr-3"
                  />
                ) : id == 7 ? (
                  <Icon
                    icon="ant-design:heart-outlined"
                    style={{ fontSize: "25px" }}
                    className="mr-3"
                  />
                ) : id == 8 ? (
                  <Icon
                    icon="clarity:eye-hide-line"
                    style={{ fontSize: "25px" }}
                    className="mr-3"
                  />
                ) : id == 9 ? (
                  <Icon
                    icon="ph:share-fat-light"
                    style={{ fontSize: "25px" }}
                    className="mr-3"
                  />
                ) : (
                  ""
                )}
                {name}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
	
	);
}
