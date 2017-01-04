import {
    MongoClient,
    ObjectID,
} from 'mongodb';


const BooksController = (bookService, nav) => {
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
                    res.render('book-view', {
                        title: 'Books',
                        nav: nav,
                        book: results,
                    });
                }
            );
        });
    };

    return {
        getAll: getAll,
        getById: getById,
    };
};

export default BooksController;
