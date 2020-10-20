const express = require('express');
const expHandlebars = require('express-handlebars');
const connection = require('./config/connection');

const PORT = process.env.PORT || 3000;
const app = express();

// Set handlebars template and view engine
app.engine("handlebars", expHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get('/', (req, res) => {
    // res.render('index');

    // Test Query
    connection.query('SELECT * FROM burgers', (err, data) => {
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`);
});