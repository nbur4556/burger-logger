const express = require('express');
const expHandlebars = require('express-handlebars');
const Orm = require('./config/orm');

const PORT = process.env.PORT || 3000;
const app = express();

const orm = new Orm('burgers');

// Set handlebars template and view engine
app.engine("handlebars", expHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

// API CALLS

app.get('/api/burgers', (req, res) => {
    orm.selectAll(data => {
        console.log(data);
        res.json(data);
    });
});

app.post('/api/new_burger', (req, res) => {
    orm.create("burger_name", req.body.burger_name);
});

app.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`);
});