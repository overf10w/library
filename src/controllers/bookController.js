var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var bookController = function (bookService, nav) {
    var middleware = function (req, res, next) {
        // TODO: uncomment it later.
        // if (!req.user) {
        // res.redirect('/');
        // }
        next();
    };

    var getIndex = function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                // find just everything
                collection.find({})
                    .toArray(function (err, results) {
                        res.render('bookListView', {
                            title: 'Books',
                            nav: nav,
                            books: results
                        });
                    });
            });
        };

    var getById = function (req, res) {
            // items in mongo db have special type of id
            var id = new objectId(req.params.id);
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                // find the one whose _id mathces id
                collection.findOne({_id: id}, function (err, results) {
                        res.render('bookView', {
                            title: 'Books',
                            nav: nav,
                            book: results
                        });
                    });
            });
        };

    return {
        getIndex: getIndex,
        getById: getById,
        middleware: middleware
    };
};

module.exports = bookController;
