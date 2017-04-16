var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 5000;
var nav = [
    {
        Link: '/Books',
        Text: 'Book'
    },
    {
        Link:'/Authors',
        Text: 'Author'
    }
];
var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);

// set public directory as static directory
// whatever we put here, will be used by express first, before it does an. else
app.use(express.static('public'));
// Check if there's body in coming JSON, and if it is, create req.body
app.use(bodyParser.json());
// Same as bodyParser.json() but for urlencoded strings
app.use(bodyParser.urlencoded());

app.set('views', './src/views');

app.set('view engine', 'ejs');

// for /Books use bookRouter
app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

app.get('/', function(req, res) {
            res.render('index', {
                title: 'Hello from render',
                nav: [{
                    Link: '/Books',
                    Text: 'Books'
                }, {
                    Link:'/Authors',
                    Text: 'Authors'
                }]
            });
        });

app.get('/books', function(req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
