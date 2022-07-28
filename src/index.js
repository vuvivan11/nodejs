const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes/index')

const app = express();

// config path directory public
app.use(express.static('public'))

// Register `hbs.engine` with the Express app.
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// route
routes(app)

app.listen(3000);