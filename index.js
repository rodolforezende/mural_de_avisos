const express = require('express');
const bodyParser = require('body-parser');
const apiRoute = require('./routes/api.js')
const path = require('path');

const app = express();
app.use(bodyParser.json())

app.use('/api', apiRoute);
app.use('/', express.static(path.join(__dirname, 'public')));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});