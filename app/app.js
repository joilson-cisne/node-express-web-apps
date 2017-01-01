var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/books', (req, res) => {
    res.send('Hello Books');
});

app.listen(port, (err) => {
    console.log(`running server on port ${port}...`);
});