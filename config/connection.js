const mysql = require('mysql');

const connectVars = new Array();

try {
    const config = require('./config.json');
    connectVars.push(config.host);
    connectVars.push(config.user);
    connectVars.push(config.password);
    connectVars.push(config.database);
}
catch {
    connectVars.push(process.env.CLEARDB_HOST);
    connectVars.push(process.env.CLEARDB_USER);
    connectVars.push(process.env.CLEARDB_PASSWORD);
    connectVars.push(process.env.CLEARDB_DATABASE);
}

const connection = mysql.createConnection({
    host: connectVars[0],
    user: connectVars[1],
    password: connectVars[2],
    database: connectVars[3]
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected to database");

    connection.query('SELECT * FROM burgers', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});

module.exports = connection;