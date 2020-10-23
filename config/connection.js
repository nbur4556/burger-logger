const mysql = require('mysql');

const connectVars = new Array();

try {
    // If config file exists, push development credentials
    const config = require('./config.json');
    connectVars.push(config.host);
    connectVars.push(config.user);
    connectVars.push(config.password);
    connectVars.push(config.database);
}
catch {
    // Push deployment credentials
    connectVars.push(process.env.CLEARDB_HOST);
    connectVars.push(process.env.CLEARDB_USER);
    connectVars.push(process.env.CLEARDB_PASSWORD);
    connectVars.push(process.env.CLEARDB_DATABASE);
}

// Create connection
const connection = mysql.createConnection({
    host: connectVars[0],
    user: connectVars[1],
    password: connectVars[2],
    database: connectVars[3],
    port: 3306
});

// Connect
connection.connect(err => {
    if (err) throw err;
    console.log("connected to database");
});

module.exports = connection;