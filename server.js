const express = require('express');
const expHandlebars = require('express-handlebars');

const PORT = process.env.PORT || 3000;
const app = express();

// Set handlebars template and view engine
app.engine("handlebars", expHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index');

    console.log('test logging');

    // Test Query
    // connection.query('SELECT * FROM burgers', (err, data) => {
    //     console.log(data);
    // });
});

app.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`);
});