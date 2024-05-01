import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

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
    <div>
     {blogs.title}
    </div>
    </>
  
    
  )
}

export default BlogPage