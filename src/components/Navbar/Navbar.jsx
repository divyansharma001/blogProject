import React from 'react'
import Drawer from '../Drawer/Drawer'
import { LuPenLine } from "react-icons/lu";
import { useState } from 'react';
import Modal from '../../pages/Modals/Modal';

function Navbar() {
  
  const [formView, setFormView] = useState(false);

  const handleStartWriting = () => {
    setFormView(true);
  };

  

  return (
    <div className='bg-gray-100'>
       <div  className='xl:hidden block'>
  <div className='flex item-center '>
  <div className="mr-4">
    <Drawer/>
  </div>
  <div className="mr-4 pt-4 font-bold">
    Your Posts
  </div>
  <div className='ml-36 pt-4 lg:pl-[500px] md:pl-[300px]  '>
    <button onClick={handleStartWriting} className="rounded-lg  bg-black text-white flex pl-4 pr-4 pt-1 pb-1 ">
      <LuPenLine className='mr-2 mt-1'/>
      Write
    </button>
    {formView && (
          <Modal onClose={() => setFormView(false)}>
            
          </Modal>
        )}
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