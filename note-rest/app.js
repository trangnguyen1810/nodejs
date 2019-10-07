const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 3000;
const db = mongoose.connect('mongodb://127.0.0.1:27017/test');
const bookRouter = express.Router();
const Book = require('./models/bookModel');

bookRouter.route('/books')
  .get((req, res) => {
    // const response = { hello: 'This is my API'};
    Book.find((err, books) =>{
      if(err) {
        return res.send(err);
      } else {
        return res.json(books);
      }
    })
    // res.json(response);
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my API with nodemon api');
});

app.listen(port, () => {
    console.log('Running on port', port);
})