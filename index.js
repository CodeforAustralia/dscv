const express = require('express');
const path = require('path');

const app = express();


app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our web files

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

/// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(8080);
