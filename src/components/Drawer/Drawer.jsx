import React from 'react'

function Drawer() {
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
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button"><img src='./menu.png' /></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}


     <div className="">
        <div className="pt-[30px] px-[85px]">
          <img src="./user.png" className="w-[100px] h-[80px] p-2" alt="User" />
        </div>

        <div className="text-[24px] font-montserrat text-center p-3">
          James Anderson
        </div>
        <div className=" font-light italic text-center p-1">@james_andy</div>
        <div className=" flex justify-evenly text-center pr-10 pt-1">
          <div className="w-[20px] text-wrap">
            240 <span className=" font-light ">Followers</span>
          </div>
          <div className="w-[20px] text-wrap">
            14 <span className=" font-light ">Following</span>
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
      
    </ul>
  </div>
</div>
  )
}

export default Drawer