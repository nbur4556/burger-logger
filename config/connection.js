const mysql = require('mysql');
const config = require('./config.json');

const connection = mysql.createConnection({
    host: process.env.CLEARDB_HOST || config.host,
    user: process.env.CLEARDB_USER || config.user,
    password: process.env.CLEARDB_PASSWORD || config.password,
    database: process.env.CLEARDB_DATABASE || config.database
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected to database");

    // Test Query
    connection.query('SELECT * FROM burgers', (err, data) => {
        console.log(data);
    });
});

module.exports = connection;