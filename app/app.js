import express from 'express';

let app = express();

let port = process.env.PORT || 5000;
let bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

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

app.use('/Books', bookRouter);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello from render',
        nav: [
            {link: '/Books', text: 'Books'},
            {link: '/Authors', text: 'Authors'},
        ],
    });
});

app.get('/books', (req, res) => {
    res.send('Hello Books');
});

app.listen(port, () => {
    console.log(`running server on port ${port}...`);
});
