import express from 'express';
import { Router } from 'express';
import db from '../db.js';

const editRouter = Router();
editRouter.use(express.json());

editRouter.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  
  db.query(
    'UPDATE blog_posts SET title = ?, body = ? WHERE id = ?',
    [title, body, id],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
      }

     
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Post not found' });
      }

     
      res.status(200).json({ message: 'Post updated successfully' });
    }
  );
});

export default editRouter;
