const connection = require('./connection.js');

const Orm = function (table) {
    this.table = table;
}

// Create a new data column
Orm.prototype.create = function (colNames, colValues, cb = function () { }) {
    connection.query('INSERT INTO ??(??) VALUES(?)', [this.table, colNames, colValues], (err, data) => {
        if (err) throw err;
        this.selectAll(cb);
    });
}

// Return all values from table
Orm.prototype.selectAll = function (cb = function () { }) {
    connection.query('SELECT * FROM ??', [this.table], (err, data) => {
        if (err) throw err;
        cb(data);
    });
}

// Return all values where a data column equals a specific value
Orm.prototype.selectWhere = function (colName, colValue, cb = function () { }) {
    connection.query(`SELECT * FROM ?? WHERE ?? = ?`, [this.table, colName, colValue], (err, data) => {
        if (err) throw err;
        cb(data);
    });
}

module.exports = Orm

// TESTING
const orm = new Orm('burgers');

orm.create(["burger_name", "is_ready"], ["Italian", 1], data => {
    console.log(data);
});