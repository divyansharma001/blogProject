import express from "express";
import { Router } from "express";
import db from "../db.js";

const postsRouter = Router();
postsRouter.use(express.json());

postsRouter.post("/posts", async (req, res) => {
  const { title, content } = req.body;

  try {
   
    const result = await db.query("INSERT INTO blog_posts (title, body) VALUES (?, ?)", [
      title,
      content,
    ]);

    res.status(200).json({
      message: "Post created successfully",
      postId: result.insertId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating the post" });
  }
});

export default postsRouter;