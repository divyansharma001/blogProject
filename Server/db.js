import { createPool } from "mysql";

const db = createPool({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "blog",
    connectionLimit: 10
})

db.query(`select * from blog_posts`, function(err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})

export default db;