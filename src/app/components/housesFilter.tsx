import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import HouseCard from "./houseCard";
export default function HousesFilter() {

    const links = [
        {
          id: 1,
          link: "For sale",
        },
        {
          id: 2,
          link: "Price",
        },
        {
          id: 3,
          link: "Beds/bath",
        },
        {
          id: 4,
          link: "Home type",
        },
        {
          id: 5,
          link: "All filters",
        }
      ];


    return (
      <main className=" flex-col items-center bg-RightGray justify-between ">
        <div className="md:flex h-10 mt-4 md:mt-0 md:items-center md:justify-between w-screen">
          <div className="">
            <p className="pl-2 text-xl font-semibold">
              Washington, DC, DC homes for sale
            </p>
          </div>
          <div className="hidden md:flex">
            <button className="text-lightGreen cursor hover:underline font-semibold text-base">
              {" "}
              Market insights |
            </button>

            <button className="text-lightGreen cursor hover:underline font-semibold text-base">
              {" "}
               City guide
            </button>
          </div>
        </div>

        <div className="hidden md:flex w-full mt-8 ">
          <ul className="hidden md:flex ">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="text-blackNav border border-[#949494] rounded-md py-3 m-2 nav-links px-3 cursor-pointer font-light  text-gray-500 hover:scale-105 hover:border-[#949494] hover:text-lightGreen duration-200 link-underline"
              >
                <Link
                  href={link}
                  className="text-sm flex justify-between items-center"
                >
                  {id === 5 ? (
                    <Icon
                      icon="lets-icons:filter-big"
                      style={{ fontSize: "18px" }}
                      className="mr-2"
                    />
                  ) : (
                    ""
                  )}
                  {link}

                  {id === 5 ? (
                    ""
                  ) : (
                    <Icon
                      icon="teenyicons:down-solid"
                      style={{ fontSize: "8px" }}
                      className="ml-2"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between align-center  w-screen md:w-auto  md:mt-6 items-center md:h-10">
          <div className="w-screen  flex md:w-auto md:flex md:justify-around align-center">
            <p className="px-2 font-semibold">2,355 homes</p>

            <p className="font-semibold px-2">Sort:</p>
            <select className="text-lightGreen font-normal bg-RightGray">
              <option className="font-thin">Recommended</option>
              <option className="font-thin">Newest</option>
              <option className="font-thin">Price</option>
            </select>
          </div>
          <div className="hidden md:flex justify-around   align-center">
            <div className="px-5 ">
              <p className="font-semibold px-2">Photos</p>
            </div>
            <div className="px-10">
              <p>Table</p>
            </div>
          </div>
        </div>

        
      </main>
    );
  }
  