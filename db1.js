const express = require('express')
const mySql = require('mysql2')

const app = express()

const db = mySql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"",
    "port":3306,
    "database":"testfk"
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
})

app.listen(5050,()=>{
    console.log("Server is running on port 5050")
})