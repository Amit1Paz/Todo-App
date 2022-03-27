const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
mongoose.connection.once('open', () => {
    console.log('connection has been made');
}).on('error', (error) => {
    console.log('connection error', error);
})

app.get('/', (req, res) => {
    res.redirect('/home');
})

const homeRouter = require('./routes/home');

app.use('/home', homeRouter);

app.listen(port, () => console.log(`server is running on port: ${port}`));