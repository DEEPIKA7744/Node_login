const Pool = require("pg").Pool;
const pool = new Pool({
    user:"postgres",
    password:"deepika1128",
    host:"localhost",
    posrt: 5432,
    database: "todo_list" 
});
module.exports = pool;