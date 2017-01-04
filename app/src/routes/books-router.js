import {Router} from 'express';
import BooksController from '../controllers/books-controller';

const router = new Router();

export default (nav) => {
    let booksController = new BooksController(null, nav);

    router.use(booksController.middleware);

    router.route('/')
        .get(booksController.getAll);

    router.route('/:id')
        .get(booksController.getById);

    return router;
};
