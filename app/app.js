import express from 'express';
import BooksRouter from './src/routes/books-router';
import AdminRouter from './src/routes/admin-router';

let app = express();

let port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

const nav = [
    {link: '/Books', text: 'Books'},
    {link: '/Authors', text: 'Authors'},
];

const booksRouter = new BooksRouter(nav);
const adminRouter = new AdminRouter(nav);

app.use('/Books', booksRouter);
app.use('/Admin', adminRouter);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello from render',
        nav: nav,
    });
});

app.get('/books', (req, res) => {
    res.send('Hello Books');
});

app.listen(port, () => {
    console.log(`running server on port ${port}...`);
});
