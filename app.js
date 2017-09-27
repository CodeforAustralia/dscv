const express = require('express');
const path = require('path');
const pug = require('pug');


// create our Express app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, '/views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, '/public')));




app.set('port', process.env.PORT || 3000);
  const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Client Assessment Tool', message: 'Welcome to the Client Assessment Tool' });
})

module.exports = app;
