import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'white',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '90%',
  width: '90%'
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
};

export default function Modal({ onClose, blog }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { id } = useParams();

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.body); // Assuming 'body' is the field containing the blog post body content
    }
  }, [blog]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (blog) {
       
        const result = await axios.put(`http://localhost:3000/api/posts/${id}`, {
          title: title,
          body: content 
        });
        console.log("Post edited successfully");
      } else {
        
        const response = await axios.post('http://localhost:3000/api/allPosts', {
          title,
          content
        });
        console.log('Post successful:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    if (onClose) {
      onClose();
    }
  };
  

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black opacity-70 z-50" style={OVERLAY_STYLES} onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-lg shadow-lg z-50" style={MODAL_STYLES}>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label htmlFor="title" className="block text-white mb-2">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              placeholder="Write Title"
              className="w-full p-2 rounded bg-[#D9D9D9] text-black placeholder-gray-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-black mb-2">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              placeholder="What’s on your mind!!!!!"
              className="w-full h-96 p-2 rounded bg-[#D9D9D9] text-black"
              rows="6"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-white text-black border border-black p-2 rounded py-1 px-1 m-2 pl-10 pr-10"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black hover:bg-gray-600 p-2 text-white font-bold rounded pl-10 pr-10 py-1 px-1 "
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById('root')
  );
}
