import cookie from 'cookie-parser';
import express from 'express';
import passport from 'passport';
import session from 'express-session';

import adminRouter from './src/routes/admin-router';
import authRouter from './src/routes/auth-router';
import booksRouter from './src/routes/books-router';

let app = express();

const port = process.env.PORT || 5000;
const nav = [
    {link: '/Books', text: 'Books'},
    {link: '/Authors', text: 'Authors'},
];

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/books', booksRouter(nav));
app.use('/admin', adminRouter(nav));
app.use('/auth', authRouter(nav));

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
