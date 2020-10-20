const mysql = require('mysql');
let connectVariables = new Array();

try {
    // Deployment Variables
    connectVariables.push(process.env.CLEARDB_HOST);
    connectVariables.push(process.env.CLEARDB_USER);
    connectVariables.push(process.env.CLEARDB_PASSWORD);
    connectVariables.push(process.env.CLEARDB_DATABASE);
}
catch {
    // Development Variables
    const config = require('./config.json');
    connectVariables.push(config.host);
    connectVariables.push(config.user);
    connectVariables.push(config.password);
    connectVariables.push(config.database);
}

const connection = mysql.createConnection({
    host: connectVariables[0],
    user: connectVariables[1],
    password: connectVariables[2],
    database: connectVariables[3]
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected to database");
});

module.exports = connection;