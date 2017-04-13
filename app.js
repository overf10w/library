var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

// set public directory as static directory
// whatever we put here, will be used by express first, before it does an. else
app.use(express.static('public'));

// set dir in which views are stored
app.set('views', './src/views');

app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index', {list: ['a', 'b']});
});

app.get('/books', function(req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
