const express = require('express');
const expHandlebars = require('express-handlebars');

const PORT = process.env.PORT;
const app = express();

// Set handlebars template and view engine
app.engine("handlebars", expHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Render landing page
app.get('/', (req, res) => {
    res.render('index');
});

// API routes
require('./routes/api-routes.js')(app);

// Run Server
app.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`);
});