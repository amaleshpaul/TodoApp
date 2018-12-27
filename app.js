const express = require('express');
const bodyParser = require('body-parser');
const todo = require('./routes/todo.route'); // Imports routes for the products

const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://cl0_db1_adm:Sona012013@cluster0-1etcd.mongodb.net/myDB?retryWrites=true';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// initialize our express app
const app = express();


const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/todolst', todo);

app.listen(port, function () {
    console.log(`App running on Port ` + port)
})