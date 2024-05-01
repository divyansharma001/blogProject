import express from "express";
import { Router } from "express";
import db from "../db.js";

const blogsRouter = Router();
blogsRouter.use(express.json());

blogsRouter.get("/posts", async(req, res)=>{

    try {
        const query = "SELECT * FROM blog_posts";
        db.query(query, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: "An error occurred while fetching blog posts" });
            } else {
                console.log("Data sent to frontend is", result);
                res.status(200).json(result);
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while fetching blog posts" });
    }
});




export default blogsRouter