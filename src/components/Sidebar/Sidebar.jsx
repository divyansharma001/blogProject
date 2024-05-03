import React from "react";
import Drawer from "../Drawer/Drawer";
import { Link } from "react-router-dom";
import { AiOutlinePieChart } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import { IoReaderOutline } from "react-icons/io5";
import { HiOutlineTicket } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

function Sidebar() {
  const options = [
    {
      name: "Dashboard",
      icon: (
        <div className="text-xl">
          <AiOutlinePieChart />
        </div>
      ),
      to: "/",
    },
    {
      name: "Add new Feeds",
      icon: (
        <div className="text-xl">
          <CiSquarePlus />
        </div>
      ),
      to: "/",
    },
    {
      name: "Your Feeds",
      icon: (
        <div className="text-xl">
          <IoReaderOutline />
        </div>
      ),
      to: "/posts",
    },
    {
      name: "Your Saved",
      icon: (
        <div className="text-xl">
          <HiOutlineTicket />
        </div>
      ),
      to: "/",
    },
    {
      name: "Profile",
      icon: (
        <div className="text-xl">
          <FaRegUser />
        </div>
      ),
      to: "/",
    },
    {
      name: "Settings",
      icon: (
        <div className="text-xl">
          <IoSettingsOutline />
        </div>
      ),
      to: "/",
    },
  ];
  return (
    <>
      <div className="hidden sm:block ">
        <div className="pt-[30px] px-[85px]">
          <img
            src="./user.png"
            className="w-full max-w-[100px] h-auto "
            alt="User"
          />
        </div>

        <div className="text-[24px] md:text-[28px] font-montserrat text-center">
          James Anderson
        </div>
        <div className="font-extralight italic text-center">@james_andy</div>
        <div className="flex justify-evenly text-center pr-10 pt-1">
          <div className="w-[15%] md:w-[20%] text-wrap">
            240 <span className="font-extralight">Followers</span>
          </div>
          <div className="w-[10%] md:w-[15%] text-wrap">
            14 <span className="font-extralight">Following</span>
          </div>
        </div>

        {options.map((option) => (
          <div
            className={`flex pl-12 gap-6 ${
              option.name === "Dashboard" ? "pt-16" : "pt-7"
            }`}
            key={option.name}
          >
            {option.icon}
            <Link to={option.to} className="text-sm">
              {option.name}
            </Link>
          </div>
        ))}

        <div className="flex pl-12 gap-4 pt-24">
          <FiLogOut />
          <button className="">Log Out</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

