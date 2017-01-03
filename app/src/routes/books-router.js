import express from 'express';

const booksRouter = express.Router();

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

booksRouter.route('/')
    .get((req, res) => {
        res.render('book-list-view', {
            title: 'Books',
            nav: [
                {link: '/Books', text: 'Books'},
                {link: '/Authors', text: 'Authors'},
            ],
            books: books,
        });
    });

booksRouter.route('/:id')
    .get((req, res) => {
        const id = req.params.id;
        res.render('book-view', {
            title: 'Books',
            nav: [
                {link: '/Books', text: 'Books'},
                {link: '/Authors', text: 'Authors'},
            ],
            book: books[id],
        });
    });

module.exports = booksRouter;
