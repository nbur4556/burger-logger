const Orm = require('../config/orm');
const orm = new Orm('burgers');

module.exports = function (app) {
    app.get('/api/burgers', (req, res) => {
        orm.selectAll(data => {
            res.json(data);
        });
    });

    app.post('/api/burgers', (req, res) => {
        orm.create('burger_name', req.body.burger_name);
    });

    app.delete('/api/burgers/:id', (req, res) => {
        orm.deleteWhere('id', req.params.id);
    });
}