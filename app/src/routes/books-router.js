import {Router} from 'express';
import BooksController from '../controllers/books-controller';
import BooksService from '../services/good-read-service';

const router = new Router();

export default (nav) => {
    let booksController = new BooksController(new BooksService(), nav);

    router.use(booksController.middleware);

    router.route('/')
        .get(booksController.getAll);

    router.route('/:id')
        .get(booksController.getById);

    return router;
};
