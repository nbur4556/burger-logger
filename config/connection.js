const mysql = require('mysql');
// const config = require('./config.json');

const connection = mysql.createConnection({
    host: process.env.CLEARDB_HOST,
    user: process.env.CLEARDB_USER,
    password: process.env.CLEARDB_PASSWORD,
    database: process.env.CLEARDB_DATABASE
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected to database");
});

module.exports = connection;