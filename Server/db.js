import { createPool } from "mysql";
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const db = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10
})

db.query(`select * from blog_posts`, function(err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log("mySql is connected");
})

export default db;