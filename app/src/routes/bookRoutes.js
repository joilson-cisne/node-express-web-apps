import express from 'express';

const bookRouter = express.Router();

const books = [
    {
        title: 'This is My title 1',
        genre: 'Fiction 1',
        author: 'Lev Tolstoy 1',
        read: false,
    },
    {
        title: 'This is My title 2',
        genre: 'Fiction 2',
        author: 'Lev Tolstoy 2',
        read: false,
    },
    {
        title: 'This is My title 3',
        genre: 'Fiction 3',
        author: 'Lev Tolstoy 3',
        read: false,
    },
];

bookRouter.route('/')
    .get((req, res) => {
        res.render('books', {
            title: 'Books',
            nav: [
                {link: '/Books', text: 'Books'},
                {link: '/Authors', text: 'Authors'},
            ],
            books: books,
        });
    });

bookRouter.route('/single')
    .get((req, res) => {
        res.send('Hello Single Book!');
    });

module.exports = bookRouter;
