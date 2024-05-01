import express from 'express'
import { Router } from 'express';
import db from '../db.js'

const postById = Router();
postById.use(express.json());

postById.get("/posts/:id", (req,res)=>{
    const blogId = req.params.id;
  
    const result = db.query(`SELECT * FROM blog_posts WHERE id = ?`, [blogId], (error, results, fields) => {
        if (error) {
            
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    
        if (results.length === 0) {
            return res.status(404).json({ error: 'Blog not found' });
        }
    
        const blog = results[0];
        console.log(blog);
        res.json(blog);
    });
})

export default postById;