var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var bookRouter = express.Router();

// set public directory as static directory
// whatever we put here, will be used by express first, before it does an. else
app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

var books = [
        {
            title: 'War And Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolaevich Tolstoy',
            read: false
        },
        {
            title: 'Les Miserables',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            read: false
        },
        {
            title: 'The Time Machine',
            genre: 'Science Fiction',
            author: 'H. G. Wells',
            read: false
        },
        {
            title: 'A Journey into the Center of the Earth',
            genre: 'Science fiction',
            author: 'Jules Verne',
            read: false
        },
        {
            title: 'The dark world',
            genre: 'Historical Fiction',
            author: 'John Doe',
            read: false
        }
];
// Books/
bookRouter.route('/')
    .get(function (req, res) {
        res.render('books', {
            title: 'Books',
            nav: [{
                Link: '/Books',
                Text: 'Books'
            }, {
                Link:'/Authors',
                Text: 'Authors'
            }],
            books: books
        });
    });
// /Books/single
bookRouter.route('/single')
    .get(function (req, res) {
        res.send('Hello Single Book!');
    });
// for /Books use bookRouter
app.use('/Books', bookRouter);

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
