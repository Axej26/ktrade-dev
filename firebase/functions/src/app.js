const express = require('express');
const cors = require('cors');

const exampleRoutes = require('./routes/example.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', exampleRoutes);

module.exports = app;
