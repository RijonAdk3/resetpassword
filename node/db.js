import mysql from 'mysql2';

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rij@N098",
    database: "resetpassword"
});

db.connect((err)=>{
    if(err) console.log("error connecting to database",err);
    else console.log("connected to database");
})

export default db;