const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = {
    origin: '*',
    credentials: true,
    allowedHeaders: ['Authorization']
};
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.get('/', (req, res) => {
    return res.status(200).send('Welcome to the server!');
});

module.exports = app;
