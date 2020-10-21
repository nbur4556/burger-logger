const Orm = require('../config/orm');
const orm = new Orm('burgers');

module.exports = function (app) {
    // Get all burgers from database and return as JSON object
    app.get('/api/burgers', (req, res) => {
        orm.selectAll(data => {
            res.json(data);
        });
    });

    // Add new burger to database and return a JSON object
    app.post('/api/burgers', (req, res) => {
        orm.create('burger_name', req.body.burger_name, data => {
            res.json(data);
        });
    });

    // Update is_ready value in database and return a JSON object
    app.put('/api/burgers', (req, res) => {
        orm.updateWhere('is_ready', req.body.val, 'id', req.body.id, data => {
            res.json(data);
        });
    });

    // Delete a burger from database and return a JSON object
    app.delete('/api/burgers/:id', (req, res) => {
        orm.deleteWhere('id', req.params.id, data => {
            res.json(data);
        });
    });
}