import express from 'express';
import db from './db.js';
import postsRouter from './routes/posts.js';
import cors from 'cors'

const app = express();
const port = 3000;
app.use(cors({ origin: "*" })); 

app.get('/', (req, res) => {
    res.send("Server is running");
});

app.use("/api/", postsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
