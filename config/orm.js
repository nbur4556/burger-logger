const connection = require('./connection.js');

const Orm = function (table) {
    this.table = table;
}

// Return all values from table
Orm.prototype.selectAll = function (cb) {
    connection.query(`SELECT * FROM ${this.table}`, (err, data) => {
        if (err) throw err;
        cb(data);
    });
}

module.exports = Orm

// TESTING
const orm = new Orm('burgers');

orm.selectAll(data => {
    console.log(data);
});