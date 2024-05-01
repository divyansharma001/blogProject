import React from 'react'
import { LuPenLine } from "react-icons/lu";

function Homepage() {
  return (
    <div className='hidden lg:block bg-gray-100' >
    <div className='flex justify-center align-middle pt-8 bg-transparent'><img src='./Create.png'/></div>
    <div className='pl-[400px] pb-20'>
    <button className='flex items-center rounded-lg h-[78px] w-[445px] bg-[#59ACF3] text-white text-3xl pl-24'>
  <LuPenLine className="mr-2" />
  START WRITING
</button>
    </div>
    
   </div>
  )
}

export default Homepage