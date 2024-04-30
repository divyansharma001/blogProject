import React from "react";
import Drawer from "../Drawer/Drawer";



function Sidebar() {
  const options = [
    {
      name: "Dashboard",
      icon: "./logo1.png",
      to: "/",
    },
    {
      name: "Add new Post",
      icon: "./logo2.png",
      to: "/",
    },
    {
      name: "Your Posts",
      icon: "./logo3.png",
      to: "/",
    },
    {
      name: "Your Saved",
      icon: "./logo4.png",
      to: "/",
    },
    {
      name: "Profile",
      icon: "./logo5.png",
      to: "/",
    },
    {
      name: "Settings",
      icon: "./logo6.png",
      to: "/",
    },
  ];
  return (
    <>
      

      <div className="hidden md:block ">
        <div className="pt-[30px] px-[85px]">
          <img src="./user.png" className="w-[100px] h-[80px] " alt="User" />
        </div>

        <div className="text-[24px] font-montserrat text-center">
          James Anderson
        </div>
        <div className=" font-extralight italic text-center">@james_andy</div>
        <div className=" flex justify-evenly text-center pr-10 pt-1">
          <div className="w-[20px] text-wrap">
            240 <span className=" font-extralight ">Followers</span>
          </div>
          <div className="w-[20px] text-wrap">
            14 <span className=" font-extralight ">Following</span>
          </div>
        </div>
  

        {options.map((option) => (
          <div className={`flex pl-12 gap-6 ${ option.name == "Dashboard" ? "pt-16" : "pt-7"}`} key={option.name}>
            <img className="h-[20px] w-[20px]" src={option.icon} />
            <div className=" text-sm ">{option.name}</div>
          </div>
        ))}
        
        <div className=" flex pl-12 gap-4 pt-24">
          <img src="./logout.png"/>
          <button className="">Log Out</button>
        </div>

      </div>
    </>
  );
}

export default Sidebar;