import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { IoShareOutline } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      console.log(id);
      const handleBlogs = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/posts/${id}`);
          if (response.status === 200) {
            setBlogs(response.data);
            console.log("params",response.data);
          } else {
            throw new Error("Failed to fetch blog posts");
          }
        } catch (error) {
          console.error(error);
        }
      };
      handleBlogs();
    }, []);
  return (
    <>
    <div className='bg-gray-100 h-full w-full '>

      <div className=' flex justify-between'>

    <div className=' text-[36px] w-[725px] p-10 pb-5'>
    How senior product managers think differently
     {/* {blogs.title} */}
    </div>

    <div className='flex flex-wrap gap-4 p-16'>
     <Link><IoShareOutline size={34} /></Link>
     <Link><BiEditAlt size={34} /></Link>
     <Link><AiOutlineDelete size={34} /></Link>
    </div>

     </div>

     <div className='font-light pl-10 flex'>
     <img src="./icon.png" alt="" /> James Anderson
     <div className='text-[#838383] text-[13.84px] pt-[2px] pl-10'>Jul 29, 2022</div>
     </div>
   
    <div className='p-10 text-[22px] flex'>
      {/* {blogs.body} */}
    I often got asked how a product manager could get promoted to a more senior level. The truth is, getting a promotion is often a complicated game. Yes, your skills and achievements play a role, but so do other factors such as how much your manager cares about developing talents, how good and tenured your peers are, how political the company is, etc. So this article isn’t about how to get promoted to senior PM, but about how to advance your thinking and become a better PM. Anyone can think like a senior PM regardless of their title — and just because one has the senior PM title, doesn’t mean they truly deserve it. The diagram below shows different ways you can “do product”, depending on how clear you are about the problem and the solution. To advance your product craft, you have to be comfortable operating at all levels of clarity, and learn the different tools you can use in each situation. How do you know whether a problem is clear? Some indicators of a clear problem: You can articulate the impact on the business and the users, You understand the root cause of the problem well, You have decided that this problem, and not other problems, should be addressed now. And you can say that a solution is clear if: You’re confident that this solution can solve the problem, You’ve considered an array of solutions, and this one wins in terms of cost/benefit, Your team knows how to deliver the solution. In this article, we’re going to cover the tools you can deploy in different situations, and at the end, let’s talk about the pitfalls to look out for. Nailing the basics: Excellent execution When the problem has already been well-defined and the solution has been agreed upon, your focus is to execute it really well. This is usually the main playing field of a more junior PM. Senior PMs have to master this aspect too, of course, but they could choose to be less hands-on.
    </div>

    </div>
    </>
  
    
  )
}

export default BlogPage