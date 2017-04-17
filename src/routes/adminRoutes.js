var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
        {
            title: 'War And Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolaevich Tolstoy',
            bookId: 656,
            read: false
        },
        {
            title: 'Les Miserables',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            bookId: 24280,
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

var router = function (nav) {
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books'); // .collection() returns new col. instance
                // populate mongodb with mock data
                // results: hand us the same arr (of books), but with mongodb stuff associated with it
                collection.insertMany(books, function(err, results) {
                    res.send(results);
                    db.close();
                });
            });
            // TODO ! don't send 2 responses
            // res.send('inserting books...');
        });
    return adminRouter;
};

module.exports = router;
