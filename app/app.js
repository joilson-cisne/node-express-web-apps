import express from 'express';

let app = express();

let port = process.env.PORT || 5000;
let bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

bookRouter.route('/')
    .get((req, res) => {
        res.send('Hello Books!');
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
