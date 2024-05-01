import React from 'react'
import Drawer from '../Drawer/Drawer'
import { LuPenLine } from "react-icons/lu";

function Navbar() {
  return (
    <div className='bg-gray-100'>
       <div  className='lg:hidden block'>
  <div className='flex item-center'>
  <div className="mr-4">
    <Drawer/>
  </div>
  <div className="mr-4 pt-4 font-bold">
    Your Posts
  </div>
  <div className='ml-36 pt-4 sm:pl-60'>
    <button className="rounded-lg  bg-black text-white flex pl-4 pr-4 pt-1 pb-1 ">
      <LuPenLine className='mr-2 mt-1'/>
      Write
    </button>
  </div> 
</div>

  </div>



  <div className=' hidden lg:block'>
    <div className='font-semibold pt-[46px] pl-[60px] text-xl'>YOUR POSTS</div>
    
   </div>


    </div>
  )
}

export default Navbar