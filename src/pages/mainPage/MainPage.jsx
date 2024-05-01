import React from 'react'
import Drawer from '../../components/Drawer/Drawer'
import { LuPenLine } from "react-icons/lu";
import Posts from '../posts/Posts';

function MainPage() {
  return (
   <div className={` bg-gray-100 w-full h-full `}>
  
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


{/* for larger screens */}

<div className='hidden lg:block'>
    <div className='font-semibold pt-[46px] pl-[60px] text-xl'>YOUR POSTS</div>
    <div className='flex justify-center align-middle pt-8 bg-transparent'><img src='./Create.png'/></div>
    <div className='pl-[400px] pb-20'>
    <button className='flex items-center rounded-lg h-[78px] w-[445px] bg-[#59ACF3] text-white text-3xl pl-24'>
  <LuPenLine className="mr-2" />
  START WRITING
</button>
    </div>
    
   </div>


   </div>







  )
}

export default MainPage