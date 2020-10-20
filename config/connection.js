const mysql = require('mysql');
// const config = require('./config.json');

const connection = mysql.createConnection({
    host: process.env.CLEARDB_HOST,
    user: process.env.CLEARDB_USER,
    password: process.env.CLEARDB_PASSWORD,
    database: process.env.CLEARDB_DATABASE
});

// const connection = mysql.createConnection({
//     host: config.host,
//     user: config.user,
//     password: config.password,
//     database: config.database
// });

connection.connect(err => {
    if (err) throw err;
    console.log("connected to database with table burgers");
});

module.exports = connection;