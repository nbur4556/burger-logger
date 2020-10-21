const Orm = require('../config/orm');
const orm = new Orm('burgers');

module.exports = function (app) {

    app.get('/api/burgers', (req, res) => {
        orm.selectAll(data => {
            res.json(data);
        });
    });

    app.post('/api/new_burger', (req, res) => {
        orm.create("burger_name", req.body.burger_name);
    });
}