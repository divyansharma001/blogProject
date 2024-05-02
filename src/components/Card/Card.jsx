import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link, useParams} from 'react-router-dom';

function Card() {
  const [blogs, setBlogs] = useState([]);

 

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
  

  const handleDelete = async (id) =>{
    try {
      const response = await axios.delete(`http://localhost:3000/api/posts/${id}`)
      setBlogs(blogs.filter(blog => blog.id != id))
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
            <div className="max-w-[381px] max-h-[149px] sm:min-w-[600px] sm:min-h-[130px] md:min-w-[1180px] md:min-h-[210px] border shadow-md rounded-md bg-white sm:p-3">
              <div className="flex justify-between">
                <p className="p-1 font-bold md:p-3">{blog.title}</p>
                <div className="p-1 flex md:p-3 gap-1">
                  <div>
                    <button ><AiFillEdit /></button>
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
                  <p className="text-sm">James Lorem</p>
                </div>
                <p className="text-xs">Jul 29, 2022</p>
              </div>
              <hr />
              <div>
                <p className="p-1 text-base md:p-3">
                  {blog.body}...<span className="text-[#283A9C]"><Link to={`/posts/${blog.id}`} >read more</Link></span>
                </p>
              </div>
              <div className="p-1 md:pl-3 flex gap-3 mb-8">
                <span className="badge text-xs badge-outline text-[#6941C6]">Leadership</span>
                <span className="badge text-xs badge-outline text-[#363F72]">Management</span>
                <span className="badge text-xs text-[#97989a]">4 min.read</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Card;