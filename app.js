var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

// set public directory as static directory
// whatever we put here, will be used by express first, before it does an. else
app.use(express.static('public'));

// src/views/index.html -> index.html
app.use(express.static('src/views'));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/books', function(req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
