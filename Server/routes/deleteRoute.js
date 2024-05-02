import express from 'express'
import { Router } from 'express'
import db from '../db.js';

const deleteRouter = Router();
deleteRouter.use(express.json())

deleteRouter.delete("/posts/:id", async(req, res)=>{
    const blogId = req.params.id;

    try {
        const result = await db.query(`DELETE FROM blog_posts WHERE id = ?`, [blogId]);
        
        res.status(200).send("Post deleted successfully");
    } catch (error) {
        
        console.error("Error deleting post:", error);
        res.status(500).send("Internal server error");
    }

})

export default deleteRouter;