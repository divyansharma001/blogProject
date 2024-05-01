import React from 'react';
import { LuPenLine } from 'react-icons/lu';
import Form from '../Form/Form';
import { useState } from 'react';
import Modal from '../Modals/Modal';

function Homepage() {
  const [formView, setFormView] = useState(false);

  const handleStartWriting = () => {
    setFormView(true);
  };

  return (
    <div className='hidden lg:block bg-gray-100'>
      <div className='flex justify-center align-middle pt-8 bg-transparent'>
        <img src='./Create.png' alt="Create"/>
      </div>
      <div className='pl-[400px] pb-20'>
        <button className='flex items-center rounded-lg h-[78px] w-[445px] bg-[#59ACF3] text-white text-3xl pl-24' onClick={handleStartWriting}>
          <LuPenLine className="mr-2" />
          START WRITING
        </button>
        {formView && (
          <Modal onClose={() => setFormView(false)}>
            <Form />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Homepage;

