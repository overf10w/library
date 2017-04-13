var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

// set public directory as static directory
// whatever we put here, will be used by express first, before it does an. else
app.use(express.static('public'));
app.set('views', './src/views');

var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
    res.render('index', {title: 'Hello from render', list: ['a', 'b']});
});

app.get('/books', function(req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
