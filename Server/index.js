import express from 'express';
import db from './db.js';
import postsRouter from './routes/allPosts.js';
import cors from 'cors'
import blogsRouter from './routes/posts.js';
import postById from './routes/postById.js';
import deleteRouter from './routes/deleteRoute.js';
import editRouter from './routes/editRouter.js';


const app = express();
const port = 3000;
app.use(cors({ origin: "*" })); 
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is running");
});

app.use("/api/", postsRouter);
app.use("/api/", blogsRouter);
app.use('/api/', postById);
app.use("/api/", deleteRouter);
app.use("/api/", editRouter)



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
