import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../Modals/Modal";

import { Link } from "react-router-dom";
import { IoShareOutline } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

function BlogPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [formView, setFormView] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/posts/${id}`);
        if (response.status === 200) {
          setBlog(response.data);
        } else {
          throw new Error("Failed to fetch blog post");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, [id, formView]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/posts/${id}`);
      console.log(response);
      navigate("/posts");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    setFormView(true);
  };

  return (
    <>
      {blog && (
        <div className="bg-gray-100 h-full w-full">
          <div className="flex justify-between">
            <div className="text-[36px] w-[725px] p-10 pb-5">{blog.title}</div>
            <div className="flex flex-wrap gap-4 p-16">
              <Link>
                <IoShareOutline size={34} />
              </Link>
              <button onClick={handleEdit}>
                <BiEditAlt size={34} />
              </button>
              <button onClick={handleDelete}>
                <AiOutlineDelete size={34} />
              </button>
            </div>
          </div>
          <div className="font-light pl-10 flex">
            <img src="./icon.png" alt="" /> James Anderson
            <div className="text-[#838383] text-[13.84px] pt-[2px] pl-10">Jul 29, 2022</div>
          </div>
          <div className="p-10 text-[22px] flex">{blog.body}</div>
        </div>
      )}

      {formView && (
        <Modal onClose={() => setFormView(false)} blog={blog} />
      )}
    </>
  );
}

export default BlogPage;
