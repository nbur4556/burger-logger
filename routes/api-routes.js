const Orm = require('../config/orm');
const orm = new Orm('burgers');

module.exports = function (app) {
    app.get('/api/burgers', (req, res) => {
        orm.selectAll(data => {
            res.json(data);
        });
    });

    app.post('/api/burgers', (req, res) => {
        orm.create('burger_name', req.body.burger_name, data => {
            res.json(data);
        });
    });

    app.put('/api/burgers', (req, res) => {
        orm.updateWhere('is_ready', req.body.val, 'id', req.body.id, data => {
            res.json(data);
        });
    });

    app.delete('/api/burgers/:id', (req, res) => {
        orm.deleteWhere('id', req.params.id, data => {
            res.json(data);
        });
    });
}