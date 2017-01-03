import express from 'express';
import handlebars from 'express-handlebars';

let app = express();

let port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('index', {title: 'Hello from render', list: ['a', 'b', 'c']});
});

app.get('/books', (req, res) => {
    res.send('Hello Books');
});

app.listen(port, () => {
    console.log(`running server on port ${port}...`);
});
