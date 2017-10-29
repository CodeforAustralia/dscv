const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const routes = require('./routes/index');
const Formio = require('formiojs');
// create our Express app
const app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials',
}));


app.set('views', path.join(__dirname, '/views')); // this is the folder where we keep our pug files
app.set('view engine', 'hbs'); // we use the engine handlebars

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);

app.set('port', process.env.PORT || 443);
  const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});


module.exports = app;
