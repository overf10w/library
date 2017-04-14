var express = require('express');

var bookRouter = express.Router();

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
bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('book', {
            title: 'Books',
            nav: [{
                Link: '/Books',
                Text: 'Books'
            }, {
                Link:'/Authors',
                Text: 'Authors'
            }],
            book: books[id]
        });
    });

module.exports = bookRouter;
