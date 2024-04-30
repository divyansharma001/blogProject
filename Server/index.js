import express from 'express';
import db from './db.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
