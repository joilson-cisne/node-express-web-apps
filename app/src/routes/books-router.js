import {Router} from 'express';
import BooksController from '../controllers/books-controller';

const router = new Router();

export default (nav) => {
    let booksController = new BooksController(null, nav);

    router.use((req, res, next) => {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    });

    router.route('/')
        .get(booksController.getAll);

    router.route('/:id')
        .get(booksController.getById);

    return router;
};
