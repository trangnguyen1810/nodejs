const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const db = mongoose.connect('mongodb://127.0.0.1:27017/test');

const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my API with nodemon api');
});

app.listen(port, () => {
    console.log('Running on port', port);
})