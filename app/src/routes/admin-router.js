import express from 'express';
const mongodb = require('mongodb').MongoClient;

const adminRouter = new express.Router();

const books = [
    {
        title: 'My Little Book 1',
        genre: 'Fiction 1',
        author: 'Lev Tolstoy 1',
        bookId: 968,
        read: false,
    },
    {
        title: 'This is My title 2',
        genre: 'Fiction 2',
        author: 'Lev Tolstoy 2',
        bookId: 98233,
        read: false,
    },
    {
        title: 'This is My title 3',
        genre: 'Fiction 3',
        author: 'Lev Tolstoy 3',
        read: false,
    },
];

export default (nav) => {
    adminRouter.route('/AddBooks')
        .get((req, res) => {
            let url = 'mongodb://localhost:27017/library-app';

            mongodb.connect(url, (err, db) => {
                let collection = db.collection('books');
                collection.insertMany(books,
                    (err, results) => {
                        res.send(results);
                        db.close();
                    }
                );
            });

            // res.send('inserting books');
        });

    return adminRouter;
};
