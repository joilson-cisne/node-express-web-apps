import express from 'express';

let app = express();

let port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'Hello from render', list: ['a', 'b', 'c']});
});

app.get('/books', (req, res) => {
    res.send('Hello Books');
});

app.listen(port, () => {
    console.log(`running server on port ${port}...`);
});
