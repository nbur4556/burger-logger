const express = require('express');
const expHandlebars = require('express-handlebars');

const PORT = process.env.PORT || 3000;
const app = express();

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
require('./routes/api-routes.js')(app);

app.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`);
});