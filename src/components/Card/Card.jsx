import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import { truncate } from 'lodash'; // Import the truncate function

function Card() {
  const [blogs, setBlogs] = useState([]);
  const [modalTrigger, setModalTrigger] = useState(false);
  const maxWords = 200;

  useEffect(() => {
    const handleBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/posts");
        if (response.status === 200) {
          setBlogs(response.data);
          console.log(response.data);
        } else {
          throw new Error("Failed to fetch blog posts");
        }
      } catch (error) {
        console.error(error);
      }
    };
    handleBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/posts/${id}`)
      setBlogs(blogs.filter(blog => blog.id !== id))
      console.log(response);
    } catch (error) {
      console.error(error)
    }
  }

  

  return (
    <div>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div className="p-7 pl-11" key={blog.id}>
            <div className="h-auto border shadow-md rounded-md bg-white sm:p-3">
              <div className="flex justify-between">
                <p className="p-1 font-bold md:p-3">{blog.title}</p>
                <div className="p-1 flex md:p-3 gap-1">
                  <div>
                   
                  </div>
                  <div>
                    <button onClick={() => handleDelete(blog.id)}><MdDelete /></button>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 items-center md:mb-4">
                <div className="flex items-center gap-2">
                  <div className="pl-3 text-sm">
                    <img src="./icon.png" alt="User Icon" />
                  </div>
                  <p className="text-sm p-2">James Lorem</p>
                </div>
                <p className="text-xs p-2">Jul 29, 2022</p>
              </div>
              <hr />
              <div>
                <p className="p-2 text-base md:p-3">
                  {truncate(blog.body, { length: maxWords, separator: ' ' })}...<span className="text-[#283A9C]"><Link to={`/posts/${blog.id}`} >read more</Link></span>
                </p>
              </div>
              <div className="md:pl-3 flex gap-3 mb-5 p-2">
                <span className="badge text-xs badge-outline text-[#6941C6]">Leadership</span>
                <span className="badge text-xs badge-outline text-[#363F72]">Management</span>
                <span className="badge text-xs text-[#97989a]">4 min.read</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        
<>
<div className="flex flex-col gap-4 xl:w-[1090px] lg:wd-[800px] md:[500px] sm:w-[300px] pl-12 p-8">
  <div className="flex gap-4 items-center">
    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div className="skeleton h-32 w-full"></div>
</div>

<div className="flex flex-col gap-4 xl:w-[1090px] lg:wd-[800px] md:[500px] sm:w-[300px] pl-12 p-8">
  <div className="flex gap-4 items-center">
    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div className="skeleton h-32 w-full"></div>
</div>

<div className="flex flex-col gap-4 xl:w-[1090px] lg:wd-[800px] md:[500px] sm:w-[300px] pl-12 p-8">
  <div className="flex gap-4 items-center">
    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div className="skeleton h-32 w-full"></div>
</div>

</>

      )}
    </div>
  );
}

export default Card;
