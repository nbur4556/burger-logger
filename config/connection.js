const mysql = require('mysql');
const config = require('./config.json');

const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected to database");
});

module.exports = connection;