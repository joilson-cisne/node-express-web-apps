import {
    MongoClient,
    ObjectID,
} from 'mongodb';


const BooksController = (bookService, nav) => {
    const middleware = (req, res, next) => {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    };

    const getAll = (req, res) => {
        let url = 'mongodb://localhost:27017/library-app';

        MongoClient.connect(url, (err, db) => {
            let collection = db.collection('books');

            collection.find({}).toArray(
                (err, results) => {
                    res.render('book-list-view', {
                        title: 'Books',
                        nav: nav,
                        books: results,
                    });
                }
            );
        });
    };

    const getById = (req, res) => {
        let id = new ObjectID(req.params.id);
        let url = 'mongodb://localhost:27017/library-app';

        MongoClient.connect(url, (err, db) => {
            let collection = db.collection('books');

            collection.findOne({_id: id},
                (err, results) => {
                    bookService.getBookById(results.bookId, (err, book) => {
                        results.book = book;
                        res.render('book-view', {
                            title: 'Books',
                            nav: nav,
                            book: results,
                        });
                    });
                }
            );
        });
    };

    return {
        getAll: getAll,
        getById: getById,
        middleware: middleware,
    };
};

export default BooksController;
